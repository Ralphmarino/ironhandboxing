/**
 * Turn camera originals into web-ready images.
 *
 *   npm run photos
 *
 * Drop originals (HEIC, JPEG, PNG, whatever the phone produced) into
 * `photos-original/`, run the command, and optimized files land in
 * `public/photos/`. Only the optimized output is committed — `photos-original/`
 * is gitignored, so full-size camera files never enter the repo and never hit
 * GitHub's file size limits.
 *
 * Each source produces two files:
 *   name.webp  — what browsers actually download (~10x smaller)
 *   name.jpg   — fallback, and what you reference in the code
 *
 * sharp comes bundled with Astro, so there is nothing extra to install.
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';

const SRC = 'photos-original';
const OUT = 'public/photos';

/** Nothing on the site is displayed wider than this, even on a 4K monitor. */
const MAX_WIDTH = 2000;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 80;

const SUPPORTED = /\.(jpe?g|png|webp|tiff?|avif|heic|heif)$/i;

const kb = (bytes) => (bytes / 1024).toFixed(0) + ' KB';
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1) + ' MB';

/** Strip spaces and capitals so URLs stay clean: "Gym Photo 1.JPG" -> "gym-photo-1" */
const slug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

let files;
try {
  files = (await readdir(SRC)).filter((f) => SUPPORTED.test(f));
} catch {
  console.error(
    `\nNo "${SRC}/" folder found.\n\n` +
      `Create it and drop your photos in:\n` +
      `  mkdir ${SRC}\n\n` +
      `Then run: npm run photos\n`,
  );
  process.exit(1);
}

if (!files.length) {
  console.error(`\nNo images found in ${SRC}/. Supported: jpg, png, webp, tiff, avif, heic.\n`);
  process.exit(1);
}

await mkdir(OUT, { recursive: true });

console.log(`\nOptimizing ${files.length} image${files.length === 1 ? '' : 's'}...\n`);

let totalBefore = 0;
let totalAfter = 0;
const written = [];

for (const file of files) {
  const srcPath = join(SRC, file);
  const name = slug(parse(file).name);

  try {
    const before = (await stat(srcPath)).size;
    // `rotate()` with no argument applies the EXIF orientation tag, otherwise
    // phone photos come out sideways once the metadata is stripped.
    const img = sharp(srcPath).rotate();
    const meta = await img.metadata();

    // Never upscale — a 900px source stays 900px.
    const width = Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH);
    const resized = img.resize({ width, withoutEnlargement: true });

    const jpgPath = join(OUT, `${name}.jpg`);
    const webpPath = join(OUT, `${name}.webp`);

    const [jpgInfo, webpInfo] = await Promise.all([
      resized.clone().jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(jpgPath),
      resized.clone().webp({ quality: WEBP_QUALITY }).toFile(webpPath),
    ]);

    totalBefore += before;
    totalAfter += jpgInfo.size + webpInfo.size;

    written.push({ name, width: jpgInfo.width, height: jpgInfo.height });

    console.log(
      `  ${file}\n` +
        `    ${mb(before)} -> ${kb(jpgInfo.size)} jpg + ${kb(webpInfo.size)} webp` +
        `  (${jpgInfo.width}x${jpgInfo.height})`,
    );
  } catch (err) {
    console.error(`  ${file}\n    SKIPPED — ${err.message}`);
  }
}

if (!written.length) {
  console.error('\nNothing was written.\n');
  process.exit(1);
}

const saved = totalBefore > 0 ? Math.round((1 - totalAfter / totalBefore) * 100) : 0;

console.log(
  `\nDone. ${mb(totalBefore)} -> ${mb(totalAfter)} (${saved}% smaller)\n` +
    `Written to ${OUT}/\n`,
);

console.log('Reference them in the site like this:\n');
for (const w of written.slice(0, 5)) {
  console.log(`  { src: '/photos/${w.name}.jpg', alt: 'Describe this photo', width: ${w.width}, height: ${w.height} },`);
}
if (written.length > 5) console.log(`  ...and ${written.length - 5} more`);
console.log('');
