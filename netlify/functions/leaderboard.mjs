import { getStore } from '@netlify/blobs';
import {
  SUBMIT_COOLDOWN_MS,
  addEntry,
  checkScore,
  cleanName,
  monthKey,
  publicBoard,
} from './lib/board.mjs';

/**
 * Monthly leaderboard for the heavy bag game.
 *
 *   GET  /api/leaderboard          this month's top ten, plus last month's winner
 *   POST /api/leaderboard          { name, score, elapsedMs }
 *   DELETE /api/leaderboard?name=  remove one entry (moderation, token required)
 *
 * Storage is Netlify Blobs, keyed by month. A new month therefore starts empty
 * with no cron and no cleanup job: the key simply does not exist yet. Old
 * months stay readable, which is what "last month's champion" is read from.
 *
 * MODERATION. To remove an entry, with LEADERBOARD_ADMIN_TOKEN set in the
 * Netlify UI under Site configuration → Environment variables:
 *
 *   curl -X DELETE "https://ironhandboxing.com/api/leaderboard?name=XXXXXX" \
 *        -H "Authorization: Bearer $LEADERBOARD_ADMIN_TOKEN"
 *
 * Without that variable set, DELETE is refused outright rather than left open.
 */

const store = () => getStore({ name: 'bag-leaderboard', consistency: 'strong' });

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json',
      // The board is small and changes often; a stale board is worse than a
      // round trip, so it is never cached at the edge.
      'cache-control': 'no-store',
    },
  });

const read = async (key) => {
  const data = await store().get(key, { type: 'json' });
  return Array.isArray(data) ? data : [];
};

/** Previous calendar month's key, for the "last month" line. */
const previousMonthKey = (now) => {
  const [y, m] = monthKey(now).split('-').map(Number);
  const prev = m === 1 ? { y: y - 1, m: 12 } : { y, m: m - 1 };
  return `${prev.y}-${String(prev.m).padStart(2, '0')}`;
};

export default async (req, context) => {
  const now = new Date();
  const key = monthKey(now);

  try {
    if (req.method === 'GET') {
      const [current, previous] = await Promise.all([read(key), read(previousMonthKey(now))]);
      return json({
        month: key,
        board: publicBoard(current),
        lastMonth: previous.length ? publicBoard(previous)[0] : null,
      });
    }

    if (req.method === 'POST') {
      let body;
      try {
        body = await req.json();
      } catch {
        return json({ error: 'bad request' }, 400);
      }

      const name = cleanName(body?.name);
      if (!name) {
        return json({ error: 'name', message: 'Use 1 to 6 letters or numbers.' }, 400);
      }

      const scoreError = checkScore(body?.score, body?.elapsedMs);
      if (scoreError) return json({ error: 'score', message: scoreError }, 400);

      // Per-IP cooldown. Netlify gives the client IP on context.ip; falling back
      // to the forwarded header keeps this working if that ever changes.
      const ip =
        context?.ip || req.headers.get('x-nf-client-connection-ip') || req.headers.get('x-forwarded-for') || 'unknown';
      const rateKey = `rate/${ip}`;
      const last = await store().get(rateKey, { type: 'json' });
      if (last?.at && now.getTime() - last.at < SUBMIT_COOLDOWN_MS) {
        return json({ error: 'rate', message: 'Give it a moment before submitting again.' }, 429);
      }

      const entries = addEntry(await read(key), { name, score: body.score, at: now.getTime() });
      await store().setJSON(key, entries);
      await store().setJSON(rateKey, { at: now.getTime() });

      const board = publicBoard(entries);
      return json({
        month: key,
        board,
        // Where they landed, so the UI can highlight the row. Null means the
        // score was real but did not make the visible top ten.
        rank: board.find((e) => e.name === name && e.score === body.score)?.rank ?? null,
        name,
      });
    }

    if (req.method === 'DELETE') {
      const token = process.env.LEADERBOARD_ADMIN_TOKEN;
      if (!token) return json({ error: 'moderation is not configured' }, 503);
      if (req.headers.get('authorization') !== `Bearer ${token}`) {
        return json({ error: 'unauthorized' }, 401);
      }

      const target = new URL(req.url).searchParams.get('name');
      if (!target) return json({ error: 'name query parameter required' }, 400);

      const wanted = target.toUpperCase();
      const entries = await read(key);
      const kept = entries.filter((e) => e.name !== wanted);
      await store().setJSON(key, kept);

      return json({ removed: entries.length - kept.length, board: publicBoard(kept) });
    }

    return json({ error: 'method not allowed' }, 405);
  } catch (err) {
    // The board is a toy. If the store is unreachable the page should carry on
    // showing the game, so this reports a clean failure rather than a 500 page.
    console.error('leaderboard', err);
    return json({ error: 'unavailable' }, 503);
  }
};

export const config = {
  path: '/api/leaderboard',
};
