/** Download only 4 historically sourced files with documented public-domain / CC terms.
 * Rights-pending 1914, 1942, 1947 photos are NOT fetched or republished. */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const root = process.cwd();
const dest = path.join(root,'public','assets','real');
const meme = path.join(root,'public','assets','meme-real');
await fs.mkdir(dest,{recursive:true}); await fs.mkdir(meme,{recursive:true});
const resources = [
  ['1886.png','https://upload.wikimedia.org/wikipedia/commons/f/f0/Jonathan_and_another_tortoise%2C_St_Helena.png'],
  ['2014.jpg','https://upload.wikimedia.org/wikipedia/commons/b/b9/World%27s_Oldest_Reptile_%2815844883993%29.jpg'],
  ['2020.jpg','https://upload.wikimedia.org/wikipedia/commons/5/51/Tortoise_Jonathan_at_Plantation_House_Saint_Helena_March_2020.jpg'],
  ['2022.jpg','https://upload.wikimedia.org/wikipedia/commons/c/ca/Saint-Helena-Plantation-House-Jonathan-the-Tortoise-by-kevin-gepford.jpg'],
];
const successes = [];
for(const [name,url] of resources) {
  try {
    console.log('Fetching:',name);
    const response = await fetch(url,{headers:{'User-Agent':'ELONATHAN-archival-asset-build/1.0 (educational; attribution in source repository)'}});
    if(!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = Buffer.from(await response.arrayBuffer());
    const img = sharp(data); const meta=await img.metadata();
    if(!['png','jpeg','webp'].includes(meta.format||'')) throw new Error('Unexpected image format');
    if(data.length>30000000) throw new Error('Image exceeds size limit');
    await fs.writeFile(path.join(dest,name),data);
    successes.push(name);
    console.log(`  verified ${meta.width}x${meta.height}, ${(data.length/1048576).toFixed(2)} MB`);
  } catch(e) { console.error(`  Could not fetch ${name}: ${e instanceof Error?e.message:e}`); }
}
const instructions = [
  ['2014-bw.webp','2014.jpg',true,'center'],
  ['2020-bw.webp','2020.jpg',true,'center'],
  ['2022-bw.webp','2022.jpg',true,'center'],
  ['2022-color.webp','2022.jpg',false,'center'],
  ['2014-bw-detail.webp','2014.jpg',true,'attention'],
];
for(const [name,src,gray,position] of instructions) {
  try {
    let chain=sharp(path.join(dest,src)).rotate().resize(1060,1220,{fit:'cover',position,withoutEnlargement:true});
    if(gray) chain=chain.grayscale().normalise();
    await chain.webp({quality:86,effort:5}).toFile(path.join(meme,name));
    console.log('Prepared real-photo meme:',name);
  } catch(e) {console.warn('Skipping photo meme:',name, e instanceof Error?e.message:e)}
}
if(successes.length!==resources.length){ console.warn(`Only ${successes.length} of 4 licensed originals were retrieved. The website can still display online photo references when network connectivity allows, but local photo downloads will be unavailable for missing files.`); process.exitCode=1; }
