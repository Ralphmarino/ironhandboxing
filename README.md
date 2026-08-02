# Ironhand Boxing — ironhandboxing.com

Static site for [Ironhand Boxing](https://ironhandboxing.com), Staten Island.
Built with [Astro](https://astro.build), deployed on Netlify from GitHub.
Replaces the previous WordPress site.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> dist/
npm run preview  # serve the build locally
```

Node 22+.

## Deploying

Netlify picks up `netlify.toml` — build `npm run build`, publish `dist`. Push to
the connected branch and it deploys. No other configuration is required.

---

## Editing content

Almost everything is data, not markup. These are the files to touch:

| What | File |
| --- | --- |
| Address, email, phone, Instagram, review count | `src/data/site.ts` |
| Homepage title tag / meta description / H1 | `src/data/site.ts` → `seo.home` |
| Class times | `src/data/schedule.ts` |
| Prices, Fighters Program, coach gym fee | `src/data/pricing.ts` |
| Coaches and their bios | `src/data/coaches.ts` |
| Google reviews shown on the homepage | `src/data/testimonials.ts` |
| FAQ questions and answers | `src/data/faqs.ts` |
| Blog posts | `src/content/blog/*.md` |
| Gallery photos | `src/pages/gallery.astro` → `photos` |

### Adding a blog post

Drop a markdown file in `src/content/blog/`. The filename becomes the URL, so
`my-post.md` publishes at `/blog/my-post/`. Frontmatter:

```yaml
---
title: 'Post title'
description: 'One or two sentences — this is the meta description.'
pubDate: 2026-01-15
author: 'Ian Sampaga'
image: '/example.png'
imageAlt: 'Describe the photo'
tags: ['Training']
draft: false      # true keeps it out of the build
---
```

### Photos

Every image currently points at `/example.png`, a generated placeholder.

**Do not commit camera originals.** GitHub rejects any file over 100MB on push
(and the github.com web uploader caps out at 25MB), and a full-size phone photo
served to every mobile visitor would wreck the site's load time. Use the
optimizer instead:

```bash
mkdir photos-original      # first time only
# drop the full-size photos in there — HEIC, JPEG, PNG, whatever the phone made
npm run photos
```

That resizes everything to 2000px wide, strips metadata, applies the EXIF
rotation so nothing comes out sideways, and writes both a `.webp` and a `.jpg`
into `public/photos/`. It prints ready-to-paste lines with the correct
dimensions. `photos-original/` is gitignored, so the originals stay on your
machine and can never reach GitHub.

Then point the site at the output — `/photos/your-photo.jpg` — in
`src/pages/gallery.astro`, `src/data/coaches.ts`, or a post's frontmatter.

Keep the `alt` text descriptive; the gallery page earns local image search
traffic.

**If a commit with a big file already failed:** deleting the file from the
folder is not enough, because git already recorded it. Back the commit out
first:

```bash
git reset --soft HEAD~1    # undo the commit, keep your files
git restore --staged .     # unstage everything
```

Then optimize and re-commit.

---

## Contact form

Netlify Forms, no third-party service and no server. The form lives in
`src/pages/contact-us.astro`; Netlify detects it in the built HTML at deploy
time via `name="contact"`, `data-netlify="true"` and the hidden `form-name`
input. `bot-field` is a honeypot.

**One-time setup after the first deploy:** in Netlify go to
*Forms → contact → Settings → Form notifications* and add an email notification
so submissions land in an inbox instead of only the dashboard.

Submissions redirect to `/thank-you/`.

---

## Instagram feed

Uses [Behold.so](https://behold.so), which holds the Instagram token and
refreshes it — the part that breaks on every DIY Instagram integration.

To turn it on: create a Behold feed connected to `@_ironhandboxing1`, then paste
the feed ID into `IG_EMBED.beholdFeedId` in `src/data/site.ts`. Until that is
set, the section renders a static grid linking to Instagram, so it is never
blank in production.

---

## SEO — please read before editing

The old site ranks well locally (#2–#3 for "boxing gym staten island", #1 for
"is boxing hard") and feeds the Google Business Profile. The rebuild preserves
that deliberately:

- **URLs are unchanged.** `/about-us/`, `/contact-us/`,
  `/frequently-asked-questions/`, `/gallery/`, `/blog/`, `/new-clients/` — same
  slugs, same trailing slashes. `astro.config.mjs` sets `trailingSlash: 'always'`
  and `format: 'directory'` to guarantee it. Don't change those without adding
  redirects.
- **Homepage title tag, meta description and H1 are carried over verbatim** in
  `src/data/site.ts`. The FAQ and gallery page titles are carried over too.
- **Structured data** ships automatically: `SportsActivityLocation` with address,
  hours and aggregate rating on the homepage, `FAQPage` on the FAQ, and
  `BlogPosting` on each post.
- `netlify.toml` 301s the old WordPress paths (`/faq/`, `/contact/`, `/feed/`,
  `/wp-admin/*`).

### Post-launch checklist

1. Point DNS at Netlify, enable HTTPS.
2. Submit `https://ironhandboxing.com/sitemap-index.xml` in Google Search
   Console.
3. Confirm the Google Business Profile website link still resolves.
4. Spot-check that the old top pages return 200 at the same URLs.

---

## Still to do before launch

These are known gaps, not oversights:

- [ ] **FAQ answers** in `src/data/faqs.ts` were written fresh — the live
      WordPress copy could not be fetched during the build. Swap in the real
      answers. Keep the "Is boxing hard?" question wording; it ranks #1.
- [ ] **Blog posts** — `boxing-training-staten-island-benefits.md` reuses the
      real published slug but new body copy. Paste the original post in and
      delete the migration note at the top.
- [ ] **Phone number** — `site.phone` is empty, so the footer and contact page
      omit it. Fill it in and it appears everywhere, including the schema.
- [ ] **Email** — `info@ironhandboxing.com` is assumed. Confirm it.
- [ ] **Photos** — replace `/example.png` everywhere.
- [ ] **Behold feed ID** for the Instagram section.
- [ ] **Verify the H1** matches the live homepage exactly.

---

## Design notes

- **Type**: Anton (display) + Inter (body), loaded from Google Fonts with
  `preconnect` and `display=swap`. To self-host later, drop the woff2 files in
  `public/fonts/` and swap the `<link>` in `src/layouts/Base.astro` for
  `@font-face` rules.
- **Palette**: near-black steel surfaces, chrome type, and an "ember" accent
  (heated iron) — tokens live at the top of `src/styles/global.css`.
- **Motion**: `src/scripts/motion.ts`, ~5KB of vanilla JS, no dependencies.
  Everything animates on transform/opacity only so it stays on the compositor
  and holds 60fps on low-end phones. All of it is disabled under
  `prefers-reduced-motion: reduce`.
- **No-JS safety**: reveal-on-scroll styles are gated behind a `.js` class set
  synchronously in `<head>`, so a JS failure shows the full page rather than a
  blank one.
- **The logo** in `src/components/Logo.astro` is a vector rebuild of the shirt
  badge — the ring, arced type and dots match the original. The centre gauntlet
  is a geometric interpretation; hand it the original vector or a high-res
  source and it can be traced exactly. `public/favicon.svg` carries the same
  geometry and should be kept in sync.
