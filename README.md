# ELONATHAN — Jonathan's new name

Fresh standalone Next.js App Router + TypeScript + Tailwind CSS v4 implementation of the agreed visual website.

## Start in Cursor

Open this folder (the directory containing `package.json`).

```bash
npm install
npm run fetch:photos
npm run dev
```

Open `http://localhost:3000`.

The site can start without the optional photo-fetch step; however, **historical photos and genuine-photo meme downloads need the source files installed**. Four licensable public photo sources are handled by the script. Three archives (1914/1942/1947) require your own permissions and stay source-only until then.

## Verification

```bash
npm run verify:assets
npm run typecheck
npm run lint
npm run build
```

The Next.js static build is configured with `output: 'export'` and `images.unoptimized = true`. The build output will be in `out/`.

## Four desktop routes / one continuous mobile view

- `/`: homepage contains entire history, full gallery, token information, and buying instructions in a continuous scroll.
- `/history/`: the nine-position timeline in detail.
- `/memes/`: gallery with enlargement and downloadable original/fictional assets.
- `/how-to-buy/`: beginner-friendly trading guidance without wallet connections or made-up links.

## Where to edit

- `src/content/site.ts`: title, ticker, verified contract/social links.
- `src/content/history.ts`: actual year labels, descriptions, original sources, photo rights status.
- `src/content/memes.ts`: image gallery titles, captions, sources.
- `src/app/globals.css`: appearance and responsive rules.
- `public/assets`: artwork and real photos.

## Mandatory factual disclaimers

The 2026 Roadster and 2032 Moon artwork is **fictional parody**. 2032 is the *projected* year Jonathan would reach age 200, not an established birthday. The brand is not officially connected to Tesla, Elon Musk or Jonathan's caretakers.

See `docs/ARTWORK_INVENTORY.md` for the honest asset manifest and `docs/CURSOR_IMPLEMENTATION_PROMPT.md` for the exact Cursor workflow.
