'use client';
import { useEffect } from 'react';
import { Download, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryEntry } from '@/types/media';
import AssetVisual from './AssetVisual';
export default function Lightbox({ image, onClose, next, prev, onDownload }: { image: GalleryEntry | null; onClose: ()=>void; next:()=>void; prev:()=>void; onDownload:(img:GalleryEntry)=>void }) {
  useEffect(()=>{ if(!image) return; const fn=(e:KeyboardEvent)=>{ if(e.key==='Escape') onClose(); if(e.key==='ArrowRight') next(); if(e.key==='ArrowLeft') prev();}; window.addEventListener('keydown',fn);return ()=>window.removeEventListener('keydown',fn);},[image,next,prev,onClose]);
  if (!image) return null;
  return <div className="overlay lightbox-backdrop" onMouseDown={onClose} role="presentation">
    <div className="lightbox-shell" role="dialog" aria-modal="true" aria-label={`${image.title} image detail`} onMouseDown={e=>e.stopPropagation()}>
      <button className="dialog-close light-close" onClick={onClose} aria-label="Close image"><X/></button>
      <div className="lightbox-image"><AssetVisual src={image.file} fallback={image.fallback} grayscale={image.grayscale} alt={image.alt}/></div>
      <div className="lightbox-description"><div><span className="eyebrow">{image.kind==='real'?'REAL PHOTOGRAPH':'FICTIONAL ARTWORK'}</span><h3>{image.title}</h3><p>{image.caption}</p></div>
        <div className="lightbox-actions"><button className="btn btn-outline" aria-label="Previous image" onClick={prev}><ChevronLeft/></button><button className="btn btn-outline" aria-label="Next image" onClick={next}><ChevronRight/></button><button className="btn btn-primary" onClick={()=>onDownload(image)}><Download size={16}/> Download</button>{image.source&&<a className="btn btn-outline" href={image.source} target="_blank" rel="noopener noreferrer"><ExternalLink size={16}/> Source</a>}</div></div>
    </div>
  </div>;
}
