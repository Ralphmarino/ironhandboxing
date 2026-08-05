/**
 * Leaderboard rules, with no I/O in them.
 *
 * Everything here is a pure function so it can be tested directly with node,
 * without a Netlify runtime or a live blob store. The handler beside it is a
 * thin wrapper: read, call these, write. The logic most likely to be wrong is
 * the logic that is actually covered.
 */

/** Arcade convention: six characters, uppercase, letters and digits only. */
export const MAX_NAME = 6;

/** How many rows the site shows, and how many are kept per month. */
export const BOARD_SIZE = 10;
export const KEEP_PER_MONTH = 50;

/**
 * A click counter can never be made cheat-proof: the count lives in the
 * visitor's browser and the server has no way to tell a person from a loop.
 * These two bounds make the lazy cheat fail without pretending to stop a
 * determined one.
 *
 * 14/second is well above what a human sustains (a fast tapper manages maybe
 * 8) but low enough that a scripted burst trips it. That rate check is the real
 * guard, because it scales with how long the run actually took; the ceiling is
 * only a backstop against an absurd number.
 *
 * The ceiling is 10,000 rather than 5,000 so that the seeded 9,999 at the top
 * of the board is beatable. Beating it means a perfect 10,000, which is the
 * highest score the public path will ever accept. At a sustained 14/second that
 * is about twelve minutes of clicking, so it is a real grind rather than an
 * impossibility, which is the point.
 */
export const MAX_PUNCHES_PER_SECOND = 14;
export const MAX_SCORE = 10_000;

/** One submission per visitor per this window, enforced per IP. */
export const SUBMIT_COOLDOWN_MS = 20_000;

/**
 * Characters that let one word be spelled several ways. Folded before the
 * blocklist runs so BUTT and 8UTT are treated the same.
 */
const LEET = { '4': 'A', '@': 'A', '8': 'B', '3': 'E', '1': 'I', '!': 'I', '0': 'O', '5': 'S', '$': 'S', '7': 'T' };

/**
 * Blocked words, checked as substrings after leet-folding.
 *
 * ⚠️ Deliberately not exhaustive, and it cannot be. Six characters is enough
 * room for plenty this list will miss, and every blocklist loses to someone
 * determined. It is a first filter, not the safety net. The safety net is the
 * delete endpoint, documented in the handler.
 */
const BLOCKED = [
  'FUCK', 'SHIT', 'CUNT', 'DICK', 'COCK', 'PUSSY', 'TWAT', 'WANK', 'BITCH',
  'BASTRD', 'ASSHOL', 'NIGGA', 'NIGGER', 'FAGGOT', 'RETARD', 'RAPE', 'NAZI',
  'HITLER', 'KKK', 'SPIC', 'CHINK', 'KIKE', 'TRANNY', 'WHORE', 'SLUT',
  'PUTA', 'MIERDA', 'PENDEJ', 'CULERO', 'COJONE', 'CABRON', 'MARICA', 'VERGA',
  'PENE', 'CULO', 'JOTO', 'PINCHE', 'CHINGA', 'ZORRA',
];

/** Which month a timestamp belongs to, in America/New_York. */
export const monthKey = (date) => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
  }).formatToParts(date);
  const y = parts.find((p) => p.type === 'year').value;
  const m = parts.find((p) => p.type === 'month').value;
  return `${y}-${m}`;
};

/**
 * Normalise a submitted name, or return null to reject it.
 *
 * Uppercased, accents stripped, anything outside A-Z0-9 dropped. An empty
 * result after that is a rejection rather than a silent "ANON", because a
 * visitor should know their entry did not go in under the name they typed.
 */
export const cleanName = (raw) => {
  if (typeof raw !== 'string') return null;

  const cleaned = raw
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, MAX_NAME);

  if (!cleaned) return null;

  const folded = [...cleaned].map((c) => LEET[c] ?? c).join('');
  if (BLOCKED.some((word) => folded.includes(word))) return null;

  return cleaned;
};

/**
 * Check a score against the clock the client reported.
 *
 * `elapsedMs` is how long the client says the run took. It is attacker
 * controlled like everything else, so this is a sanity bound and not proof:
 * it rejects 9,000 punches in four seconds, not a patient script.
 */
export const checkScore = (score, elapsedMs) => {
  if (!Number.isInteger(score) || score < 1) return 'score must be a positive whole number';
  if (score > MAX_SCORE) return `score above the ${MAX_SCORE} ceiling`;
  if (!Number.isFinite(elapsedMs) || elapsedMs < 0) return 'missing run duration';

  // One second of grace, so a genuine fast opening burst is not punished.
  const allowed = ((elapsedMs + 1000) / 1000) * MAX_PUNCHES_PER_SECOND;
  if (score > allowed) return 'score is faster than humanly possible';

  return null;
};

/**
 * Add an entry and return the trimmed, sorted board.
 *
 * One row per name: a repeat visitor improving their score replaces their old
 * row rather than filling the board with six near-identical entries. Ties keep
 * whoever got there first, which is the arcade convention.
 */
export const addEntry = (entries, entry) => {
  const others = entries.filter((e) => e.name !== entry.name);
  const previous = entries.find((e) => e.name === entry.name);
  const best = previous && previous.score >= entry.score ? previous : entry;

  return [...others, best]
    .sort((a, b) => b.score - a.score || a.at - b.at)
    .slice(0, KEEP_PER_MONTH);
};

/**
 * Guard for the owner-only endpoints.
 *
 * Returns null when the caller may proceed, otherwise the reason. An unset
 * token refuses rather than allows: a deployment that forgot to configure the
 * variable must not end up with an open write endpoint.
 */
export const isAuthorised = (header, token) => {
  if (!token) return 'moderation is not configured';
  if (header !== `Bearer ${token}`) return 'unauthorized';
  return null;
};

/** What the browser receives. `at` is kept, `ip` never is. */
export const publicBoard = (entries) =>
  entries.slice(0, BOARD_SIZE).map((e, i) => ({
    rank: i + 1,
    name: e.name,
    score: e.score,
    at: e.at,
  }));
