# Cursor agent instruction — ELONATHAN site

You have opened the freshly generated `ELONATHAN_Fresh_NextJS_Codebase` project.

Your task: install dependencies, run the site and fix any verified build or rendering issues WITHOUT changing the approved creative design and asset roles.

## Brand identity — fixed

- Official name: **Jonathan's new name**
- Ticker: **ELONATHAN**
- Network: Ethereum mainnet
- The depicted Elon/tesla vehicle encounter is **fictional parody**, with no official endorsement.
- DO NOT invent contract address, social URLs, holder counts, market figures, purchase availability, or royalty endorsements.
- Preserve approved cinematic duo, logo, and solo mascot artwork.

## Site layout — fixed

- Stack Next.js + TypeScript + Tailwind CSS v4; App Router; static export.
- Four desktop routes: `/`, `/history`, `/memes`, `/how-to-buy`.
- Mobile home `/` is a **single continuous page** with all substantive content, no mandatory navigation or click needed to read it.
- No oversized banner hero. Use the existing editorial hero with an inset duo portrait.
- Story timeline contains nine entries: seven genuine historical photo records and two clearly fictional scenes (2026 Roadster and projected 2032 Moon mission).
- Do not substitute invented historical photos when real photographs are unavailable. Retain source-only placeholders for rights-pending 1914, 1942, 1947.
- Gallery uses organic variable-height bordered cards, lightbox enlargement, optional filter, custom filename download per image.
- The real-vs-fiction balance is 5:5: four distinct real photo variants plus one labelled repeat crop vs five AI artworks. See docs/ARTWORK_INVENTORY.md for the unavoidable four-vs-five count conflict in the original brief.
- Maintain attribution, source links, and source-vs-fiction distinction in every gallery item.

## Execute

1. `npm install`
2. `npm run fetch:photos` (requires internet; verifies locally usable authentic photo files; never pulls the three rights-pending archives)
3. `npm run verify:assets`
4. `npm run typecheck`
5. `npm run lint`
6. `npm run build`
7. `npm run dev`
8. Review all routes at 1440px, 1024px, 390px and 360px. Verify no side scrolling, no broken assets, and all 9 timeline entries.
9. Test meme-card enlargement with keyboard navigation and Escape close; test custom filename download on an actually installed local image.
10. For production deploy, use output `out/` after a passing build.

## Safe changes only

Fix actual build/lint/runtime issues, accessibility and responsive cropping as needed. Do not redesign approved layouts or change token identity. Keep all imagery and descriptions editable through `src/content`.

## Before releasing

Report precisely which real historical photo files have been installed. If a rights-pending image is not licensed, report it as a source-only entry and leave it out of the public downloadable gallery.
