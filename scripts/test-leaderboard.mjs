/**
 * Tests for the leaderboard rules.
 *
 *   node scripts/test-leaderboard.mjs
 *
 * These cover the pure logic in netlify/functions/lib/board.mjs, which is where
 * the decisions live: what counts as a valid name, what counts as a plausible
 * score, and how the board is ordered and trimmed. The handler around it only
 * does I/O.
 */
import assert from 'node:assert/strict';
import {
  MAX_SCORE,
  addEntry,
  checkScore,
  cleanName,
  isAuthorised,
  monthKey,
  publicBoard,
} from '../netlify/functions/lib/board.mjs';

let passed = 0;
const test = (label, fn) => {
  try {
    fn();
    passed += 1;
  } catch (err) {
    console.error(`✗ ${label}\n  ${err.message}`);
    process.exitCode = 1;
  }
};

/* ---------- names ---------- */

test('uppercases and keeps six characters', () => {
  assert.equal(cleanName('ian'), 'IAN');
  assert.equal(cleanName('abcdefghij'), 'ABCDEF');
});

test('strips accents rather than rejecting them', () => {
  assert.equal(cleanName('José'), 'JOSE');
  assert.equal(cleanName('Muñoz'), 'MUNOZ');
});

test('drops punctuation, spaces and emoji', () => {
  assert.equal(cleanName('A-B C!'), 'ABC');
  assert.equal(cleanName('K.O.'), 'KO');
  assert.equal(cleanName('🥊🥊'), null);
});

test('rejects empty and non-string input', () => {
  for (const bad of ['', '   ', '!!!', null, undefined, 42, {}, []]) {
    assert.equal(cleanName(bad), null, `expected null for ${JSON.stringify(bad)}`);
  }
});

test('blocks profanity', () => {
  assert.equal(cleanName('fuck'), null);
  assert.equal(cleanName('puta'), null);
});

test('blocks profanity spelled with digits', () => {
  assert.equal(cleanName('sh1t'), null);
  assert.equal(cleanName('5h1t'), null);
  assert.equal(cleanName('C0CK'), null);
});

test('blocks profanity embedded in a longer name', () => {
  assert.equal(cleanName('xfucky'), null);
});

test('does not block ordinary names', () => {
  for (const ok of ['IAN', 'MARK', 'ARI', 'MANNY', 'RAUL', 'CARLOS', 'KO', 'JAB123', 'ANA']) {
    assert.equal(cleanName(ok), ok.slice(0, 6), `${ok} should be allowed`);
  }
});

/* ---------- scores ---------- */

test('accepts a plausible run', () => {
  assert.equal(checkScore(120, 30_000), null);
});

test('rejects non-integers and nonsense', () => {
  assert.ok(checkScore(0, 10_000));
  assert.ok(checkScore(-5, 10_000));
  assert.ok(checkScore(1.5, 10_000));
  assert.ok(checkScore('900', 10_000));
  assert.ok(checkScore(NaN, 10_000));
});

test('rejects a score above the ceiling', () => {
  assert.ok(checkScore(MAX_SCORE + 1, 10_000_000));
});

test('the ceiling is 10,000, so the seeded 9,999 stays beatable', () => {
  // Pinned deliberately. Lowering this below 10,000 would make the score at the
  // top of the board unbeatable through honest play, which is the one thing the
  // monthly reset exists to avoid.
  assert.equal(MAX_SCORE, 10_000);
  assert.equal(checkScore(9_999, 12 * 60_000), null);
  assert.equal(checkScore(10_000, 13 * 60_000), null);
  assert.ok(checkScore(10_001, 13 * 60_000));
});

test('a perfect 10,000 still has to be earned at a human rate', () => {
  // Twelve minutes of sustained clicking passes; ten seconds does not.
  assert.ok(checkScore(10_000, 10_000));
});

test('rejects impossible rates', () => {
  // 500 punches in two seconds
  assert.ok(checkScore(500, 2_000));
});

test('allows a fast opening burst thanks to the grace second', () => {
  // 20 punches in the first half second is human enough to let through
  assert.equal(checkScore(20, 500), null);
});

test('rejects a missing duration', () => {
  assert.ok(checkScore(100, undefined));
  assert.ok(checkScore(100, -1));
});

/* ---------- board ---------- */

const entry = (name, score, at) => ({ name, score, at });

test('sorts by score, highest first', () => {
  const board = [entry('AAA', 10, 1), entry('BBB', 30, 2)];
  const out = addEntry(board, entry('CCC', 20, 3));
  assert.deepEqual(out.map((e) => e.name), ['BBB', 'CCC', 'AAA']);
});

test('a tie keeps whoever got there first', () => {
  const out = addEntry([entry('EARLY', 50, 1)], entry('LATE', 50, 2));
  assert.deepEqual(out.map((e) => e.name), ['EARLY', 'LATE']);
});

test('one row per name, improved score replaces the old one', () => {
  const out = addEntry([entry('IAN', 40, 1)], entry('IAN', 90, 2));
  assert.equal(out.length, 1);
  assert.equal(out[0].score, 90);
});

test('a worse repeat score does not overwrite the better one', () => {
  const out = addEntry([entry('IAN', 90, 1)], entry('IAN', 12, 2));
  assert.equal(out.length, 1);
  assert.equal(out[0].score, 90);
});

test('keeps the board bounded', () => {
  let board = [];
  for (let i = 0; i < 200; i++) board = addEntry(board, entry(`N${i}`, i, i));
  assert.equal(board.length, 50);
  assert.equal(board[0].score, 199);
});

test('the public board is ranked and hides nothing private', () => {
  const board = publicBoard([entry('AAA', 30, 1), entry('BBB', 20, 2)]);
  assert.deepEqual(board[0], { rank: 1, name: 'AAA', score: 30, at: 1 });
  assert.equal(board.length, 2);
});

test('the public board is capped at ten rows', () => {
  const many = Array.from({ length: 40 }, (_, i) => entry(`N${i}`, 100 - i, i));
  assert.equal(publicBoard(many).length, 10);
});

/* ---------- owner endpoints ---------- */

test('an unset token refuses rather than allows', () => {
  // The dangerous failure would be an unconfigured deploy leaving the write
  // endpoint open to anyone.
  assert.equal(isAuthorised('Bearer anything', undefined), 'moderation is not configured');
  assert.equal(isAuthorised(null, ''), 'moderation is not configured');
});

test('rejects a wrong or missing bearer token', () => {
  assert.equal(isAuthorised('Bearer nope', 'secret'), 'unauthorized');
  assert.equal(isAuthorised(null, 'secret'), 'unauthorized');
  assert.equal(isAuthorised('secret', 'secret'), 'unauthorized');
  assert.equal(isAuthorised('bearer secret', 'secret'), 'unauthorized');
});

test('accepts the correct token', () => {
  assert.equal(isAuthorised('Bearer secret', 'secret'), null);
});

test('a seeded score above the public ceiling still sorts correctly', () => {
  // The public path would refuse this; the owner path is the only way in.
  const out = addEntry([entry('IAN', 412, 1)], entry('RAMA', 1_000_000, 2));
  assert.deepEqual(out.map((e) => e.name), ['RAMA', 'IAN']);
  assert.equal(publicBoard(out)[0].score, 1_000_000);
});

test('the public path still refuses that score', () => {
  assert.ok(checkScore(1_000_000, 60_000));
});

/* ---------- month rollover ---------- */

test('groups by New York calendar month', () => {
  assert.equal(monthKey(new Date('2026-08-04T12:00:00Z')), '2026-08');
  assert.equal(monthKey(new Date('2026-08-15T23:59:00Z')), '2026-08');
});

test('rolls over on New York time, not UTC', () => {
  // Midnight UTC on the 1st is still 8pm on the 31st in New York, so this
  // belongs to the OLD month. Keying off UTC would reset the board four hours
  // early and wipe an evening of scores.
  assert.equal(monthKey(new Date('2026-09-01T00:30:00Z')), '2026-08');
  assert.equal(monthKey(new Date('2026-09-01T05:30:00Z')), '2026-09');
});

if (!process.exitCode) console.log(`✓ ${passed} leaderboard tests passed`);
