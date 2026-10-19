import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const required=['brand/logo.png','brand/duo.webp','brand/solo.webp','brand/solo-alt.webp','timeline/2026.webp','timeline/2032.webp','ai/roadster.webp','ai/friends.webp','ai/sunrise.webp','ai/solo.webp','ai/solo-rocket.webp'];
let failed=0;
for(const file of required){const p=path.join(root,'public/assets',file);if(!fs.existsSync(p)||fs.statSync(p).size===0){failed++;console.error('MISSING:',file)}else console.log('OK:',file,fs.statSync(p).size,'bytes')}
if(failed)process.exitCode=1;else console.log(`All ${required.length} bundled artwork assets found.`);
