'use client';
import { useCallback, useMemo, useState } from 'react';
import { Download, Maximize2, Camera, WandSparkles, ArrowUpRight } from 'lucide-react';
import type { GalleryEntry } from '@/types/media';
import { memes } from '@/content/memes';
import AssetVisual from './AssetVisual';
import Lightbox from './Lightbox';
import { DownloadDialog, type DownloadTarget } from './DownloadDialog';
export default function MemeGallery({ full=false }: { full?:boolean }) {
  const [filter,setFilter]=useState<'all'|'real'|'fiction'>('all');
  const [index,setIndex]=useState<number|null>(null);
  const [target,setTarget]=useState<DownloadTarget|null>(null);
  const visible=useMemo(()=>memes.filter(m=>filter==='all'||m.kind===filter),[filter]);
  const next=useCallback(()=>setIndex(x=>x===null?null:(x+1)%visible.length),[visible.length]);
  const prev=useCallback(()=>setIndex(x=>x===null?null:(x-1+visible.length)%visible.length),[visible.length]);
  const openDownload=useCallback((img:GalleryEntry)=>{setTarget({src:img.file,title:img.title,suggestedName:`elonathan-${img.id}`,credit:img.credit});},[]);
  return <section id="memes" className="gallery-section section-pad"><div className="shell"><div className="section-heading gallery-heading"><div><span className="eyebrow">CHAPTER 02 / ART & MEMES</span><h2>Too old to care.<br/><em>Too iconic to ignore.</em></h2></div><p>Real photos meet imaginary adventures. Tap any frame to explore, then download with your own filename.</p></div>
    <div className="gallery-tools" role="group" aria-label="Filter meme gallery">{(['all','real','fiction'] as const).map(v=><button className={filter===v?'selected':''} onClick={()=>{setFilter(v);setIndex(null)}} key={v}>{v==='all'?'All the memes':v==='real'?'Real photos':'Imagined adventures'}</button>)}<div className="gallery-tally"><Camera size={14}/> 5 real views <span>·</span> <WandSparkles size={14}/> 5 fictional scenes</div></div>
    <div className={`masonry ${full?'masonry-full':''}`}>{visible.map((img,i)=><article key={img.id} className={`meme-card aspect-${img.aspect} ${i%3===0?'featured':''}`}><button type="button" onClick={()=>setIndex(i)} className="meme-open" aria-label={`Enlarge ${img.title}`}><AssetVisual src={img.file} fallback={img.fallback} alt={img.alt} grayscale={img.grayscale}/><span className="zoom-hint"><Maximize2 size={16}/> Enlarge</span></button><div className="meme-card-bottom"><span className="meme-kind">{img.kind==='real'?<><Camera size={12}/> REAL PHOTO</>:<><WandSparkles size={12}/> ORIGINAL FICTION</>}</span><h3>{img.title}</h3><p>{img.caption}</p><div className="meme-actions"><button type="button" onClick={()=>openDownload(img)}><Download size={15}/> Download</button>{img.source&&<a target="_blank" rel="noopener noreferrer" href={img.source}>Credit <ArrowUpRight size={14}/></a>}</div></div></article>)}</div>
    <p className="gallery-footnote">Five real-photo views use four historical photo variants plus one alternate crop of the 2014 photograph; the five AI scenes are separate original fictional artworks. Historical modifications are labelled and require attribution to their photographers.</p>
  </div><Lightbox image={index===null?null:visible[index]} onClose={()=>setIndex(null)} next={next} prev={prev} onDownload={openDownload}/><DownloadDialog target={target} onClose={()=>setTarget(null)}/></section>;
}
