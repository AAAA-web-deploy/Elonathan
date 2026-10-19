# Verification status of this codebase

The source package was assembled and checked in the assistant's isolated filesystem.

## Checks completed successfully

- All 19 local TypeScript / TSX modules parsed using TypeScript `transpileModule` (zero syntax diagnostics).
- All 11 required bundled artwork assets exist on disk, with non-zero file sizes (`npm run verify:assets`).
- Local TypeScript path imports were checked for files missing from `src/` (none missing).
- The history dataset contains exactly **9** entries: 7 archival + 2 fiction.
- The meme dataset contains exactly **10** views: 5 real-photo-based + 5 original AI artworks.
- Four desktop routes exist. Mobile homepage renders ALL story/gallery/token sections in one continuous page.
- Required token address and social links are `null`, deliberately unpublished.

## Cannot yet certify

The isolated build environment could not complete `npm install` because external npm registry access timed out. As a result, a real Next.js `npm run typecheck`, `npm run lint`, production `npm run build`, and browser acceptance test were NOT completed. Cursor should run them after extracting this package on a machine with internet access.

Four public-domain/CC archival photos were not downloadable into the working container. Run `npm run fetch:photos` on your computer after dependency installation to fetch and generate downloadable photos, or manually populate corresponding asset paths. 1914, 1942, 1947 remain source-only pending rights and attribution clarity.

**Do not interpret an unverified build as production-ready.**
