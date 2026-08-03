# Logo masters

Full-resolution source artwork. **Not served.** This folder sits outside
`public/`, so nothing in here is copied into the build.

| File | What it is | Derived assets in `public/` |
| --- | --- | --- |
| `logo-flat-transparent.png` | Flat white line-art badge, transparent | `logo.png`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` |
| `medallion-2000.png` | Chrome medallion, 2000px, transparent | `medallion.webp`, `medallion.png` |

Regenerate the derived files from these if the artwork ever changes.

```sh
# Medallion: WebP is what browsers actually get (~88KB against ~479KB for the
# equivalent PNG). The PNG is a fallback only, so it is generated smaller.
node -e "
const sharp = require('sharp');
const src = 'art-masters/medallion-2000.png';
sharp(src).resize({ width: 800 }).webp({ quality: 82 }).toFile('public/medallion.webp');
sharp(src).resize({ width: 600 }).png({ palette: true, quality: 100, effort: 9 }).toFile('public/medallion.png');
"
```

The flat logo is a 16-colour indexed PNG on purpose. It is high-contrast line
work, which lossy codecs handle badly and a small palette handles almost
perfectly: 45KB indexed against 217KB for lossless WebP.
