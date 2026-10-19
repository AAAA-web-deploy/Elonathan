# Art inventory and publishing status

**New Next.js codebase** for the approved **Jonathan's new name ($ELONATHAN)** concept.

## History: nine entries, numbered and rendered on an alternating chronological spine

| Year | File / source | Status |
| --- | --- | --- |
| c.1886 | public-domain Plantation House photo (early Jonathan identification disputed) | Source identified, install via `npm run fetch:photos`; not bundled |
| 1914 | St Helena Image Info archival photo | SOURCE-ONLY: photographer/rights and subject attribution uncertain |
| 1942 | Governor Bain-Gray archival photo | SOURCE-ONLY: rights clearance required |
| 1947 | Royal visit photograph | SOURCE-ONLY: rights clearance required |
| 2014 | David Stanley · CC BY 2.0 | Source identified, install via fetch command; credit required |
| 2020 | Kevstan · CC BY-SA 4.0 | Source identified, install via fetch command; credit + share-alike |
| 2022 | Kevin Gepford · CC BY-SA 4.0 | Source identified, install via fetch command; credit + share-alike |
| 2026 | roadster adventure | bundled original fictional image |
| 2032 | 200-year Moon mission | bundled original fictional image; age estimated |

The three source-only historical entries deliberately appear as archival source placeholders until you have licensed files. Do not pass off AI-generated images as real photos or hotlink unlicensed images without rights clearance.

## Meme gallery: 5 genuine-photo views vs 5 original fictional scenes

The previously approved brief requires 3 B&W + 1 color *real photographs* (four), while separately requesting *five* AI scenes and a 1:1 ratio. Those counts cannot all hold simultaneously unless another real-photo appearance is introduced. This implementation uses:

- **Three real monochrome variations:** 2014, 2020, 2022 — all Jonathan only after cropping.
- **One real color variation:** 2022 Jonathan-only crop.
- **One bonus photo-based monochrome appearance:** tighter 2014 crop, explicitly credited as a reuse of the 2014 source (not misrepresented as a new archival photograph).
- **Five fictional scenes:** Jonathan driving the Roadster with Elon, old friends, sunrise, solo mascot, solo rocket portrait.

After `npm run fetch:photos` completes, the 5 real-photo views are generated locally under `public/assets/meme-real/`.

## Artwork bundled in codebase

- `public/assets/brand/`: approved round logo, duo, two solo characters
- `public/assets/ai/`: five fictional meme images
- `public/assets/timeline/`: 2026 and 2032 fictional images

No token address, exchange URL, Telegram link, or X account was invented.

## Photo sources and rights

- Early historical photo: https://commons.wikimedia.org/wiki/File:Jonathan_and_another_tortoise,_St_Helena.png
- 1914/1942: https://sainthelenaisland.info/jonathan.htm
- 1947: https://kids.guinnessworldrecords.com/news/2026/6/jonathan-the-tortoise-is-a-guinness-world-records-icon-here-is-why
- 2014: https://commons.wikimedia.org/wiki/File:World%27s_Oldest_Reptile_(15844883993).jpg
- 2020: https://commons.wikimedia.org/wiki/File:Tortoise_Jonathan_at_Plantation_House_Saint_Helena_March_2020.jpg
- 2022: https://commons.wikimedia.org/wiki/File:Saint-Helena-Plantation-House-Jonathan-the-Tortoise-by-kevin-gepford.jpg

Review licence requirements with the intended commercial use; do not assume web discoverability means public-domain permission.
