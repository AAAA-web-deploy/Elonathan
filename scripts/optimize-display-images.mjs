import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assets = path.join(root, 'public/assets');
const outRoot = path.join(assets, 'display');
const quality = 78;
const entries = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (name === 'display') continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (/\.(png|jpe?g|webp)$/i.test(name)) entries.push(full);
  }
}

walk(assets);
fs.mkdirSync(outRoot, { recursive: true });
const manifest = {};

for (const file of entries) {
  const rel = path.relative(assets, file).replaceAll('\\', '/');
  const key = `/assets/${rel}`;
  const image = sharp(file, { failOn: 'none' });
  const meta = await image.metadata();
  const sourceWidth = meta.width ?? 0;
  const sourceHeight = meta.height ?? 0;
  if (!sourceWidth || !sourceHeight) continue;
  const parsed = path.parse(rel);
  const variants = [];
  const targets = [...new Set([sourceWidth > 480 ? 480 : sourceWidth, Math.min(960, sourceWidth)])];
  for (const width of targets) {
    const target = width;
    const destRel = `${parsed.dir}/${parsed.name}-${target}.webp`.replace(/^\//, '');
    const dest = path.join(outRoot, destRel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    await sharp(file, { failOn: 'none' })
      .resize({ width: target, withoutEnlargement: true })
      .webp({ quality })
      .toFile(dest);
    const sized = await sharp(dest).metadata();
    variants.push({ path: `/assets/display/${destRel}`, w: sized.width ?? target, h: sized.height ?? sourceHeight });
  }
  const largest = variants[variants.length - 1];
  manifest[key] = {
    src: largest.path,
    width: sourceWidth,
    height: sourceHeight,
    variants,
  };
  console.log(key, variants.map((item) => item.w).join(','));
}

const ts = `export type DisplayVariant = { path: string; w: number; h: number };
export type DisplayRecord = { src: string; width: number; height: number; variants: DisplayVariant[] };
export const displayImages: Record<string, DisplayRecord> = ${JSON.stringify(manifest, null, 2)};
`;
const destTs = path.join(root, 'src/generated/displayImages.ts');
fs.mkdirSync(path.dirname(destTs), { recursive: true });
fs.writeFileSync(destTs, ts);
console.log(`wrote ${Object.keys(manifest).length} display records`);
