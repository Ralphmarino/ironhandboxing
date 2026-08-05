/**
 * Horizontal overflow check.
 *
 *   npx astro preview --port 4500 &
 *   node scripts/check-overflow.mjs 390 / /es/ /contact-us/
 *
 * Run it against every page after any layout change. It exits non-zero on a
 * failure, so it can gate a deploy.
 *
 * documentElement.scrollWidth is NOT usable on this site: html/body carry
 * overflow-x: clip, which clips the overflow out of the scroll box entirely, so
 * scrollWidth reports a clean page while content is being cut off the right
 * edge. This measures element rectangles against the viewport instead, which is
 * what a person actually sees.
 */
import pkg from '/opt/node22/lib/node_modules/playwright/index.js';
const { chromium } = pkg;

const width = Number(process.argv[2]);
const urls = process.argv.slice(3);
const base = process.env.BASE || 'http://127.0.0.1:4500';

const b = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--disable-dev-shm-usage', '--no-sandbox'],
});

let bad = 0;
for (const url of urls) {
  const p = await b.newPage({ viewport: { width, height: 844 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  // Stub the board so a page is judged with content in it, not an empty shell
  await p.route('**/api/leaderboard', (r) =>
    r.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        month: '2026-08',
        lastMonth: { rank: 1, name: 'ARI', score: 702, at: 0 },
        board: [
          { rank: 1, name: 'RALPH', score: 5666, at: 1 },
          { rank: 2, name: 'MANNY', score: 412, at: 2 },
        ],
      }),
    }),
  );
  await p.goto(base + url, { waitUntil: 'domcontentloaded', timeout: 20000 });
  await p.waitForTimeout(900);

  const over = await p.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const out = [];
    for (const el of document.querySelectorAll('body *')) {
      const cs = getComputedStyle(el);
      if (cs.position === 'fixed' || cs.display === 'none' || cs.visibility === 'hidden') continue;
      if (el.classList.contains('skip-link')) continue; // parked off-screen on purpose

      // Anything inside a clipping ancestor is already contained: decorative
      // glows, marquee tracks and masked layers all sit outside their box by
      // design and are cut by it, not by the viewport.
      let clipped = false;
      for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
        const ox = getComputedStyle(a).overflowX;
        if (ox !== 'visible') { clipped = true; break; }
      }
      if (clipped) continue;
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > vw + 1 || r.left < -1)) {
        out.push({
          tag: el.tagName,
          cls: (el.className || '').toString().slice(0, 32),
          left: Math.round(r.left),
          right: Math.round(r.right),
          vw,
        });
      }
    }
    return out.slice(0, 4);
  });

  if (over.length || errs.length) {
    bad++;
    console.log(`❌ ${width} ${url}`, JSON.stringify(over), errs.length ? errs : '');
  } else {
    console.log(`   ${width} ${url}`);
  }
  await p.close();
}
console.log(bad ? `${bad} FAILING` : `all clean at ${width}px`);
await b.close();
process.exit(bad ? 1 : 0);
