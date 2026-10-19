'use client';
import { useState } from 'react';
import { ArrowUpRight, Download, Hourglass, Sparkles } from 'lucide-react';
import { history } from '@/content/history';
import AssetVisual from './AssetVisual';
import { DownloadDialog, type DownloadTarget } from './DownloadDialog';
export default function HistoryTimeline({ compact=false }: { compact?:boolean }) {
  const [target,setTarget]=useState<DownloadTarget|null>(null);
  return <section id="history" className="timeline-section section-pad"><div className="shell"><div className="section-heading"><div><span className="eyebrow">CHAPTER 01 / THROUGH THE AGES</span><h2>One tortoise.<br/><em>Two centuries.</em></h2></div><p>Seven archival photographic milestones, followed by two imagined futures. Real history ends where the legend begins.</p></div>
    <div className={`timeline ${compact?'timeline-compact':''}`}><div className="timeline-axis" aria-hidden="true"/>{history.map((item,index)=><article className={`timeline-event ${item.kind==='fiction'?'timeline-fiction':''} ${index%2?'right':'left'}`} key={item.id}><span className="timeline-marker"/><div className="timeline-year"><span>{item.year}</span>{item.kind==='fiction'?<Sparkles size={15}/>:<Hourglass size={14}/>}</div><div className="timeline-card"><div className="timeline-image" data-type={item.kind}><AssetVisual src={item.file} fallback={item.external} alt={`${item.title} — ${item.year}`}/><div className="timeline-image-badge">{item.kind==='fiction'?'FICTIONAL ART':'ARCHIVAL PHOTO'}</div></div><div className="timeline-info"><h3>{item.title}</h3><p>{item.description}</p><p className="media-credit">{item.credit}</p>{item.note&&<span className="archive-warning">{item.note}</span>}<div className="card-controls">{item.file&&<button onClick={()=>setTarget({src:item.file!,title:item.title,suggestedName:`jonathan-history-${item.year.replace(/\D/g,'')||item.id}`,credit:item.credit})} aria-label={`Download ${item.year} image`}><Download size={16}/> Download</button>}{item.source&&<a target="_blank" rel="noopener noreferrer" href={item.source}>Photo source <ArrowUpRight size={16}/></a>}</div></div></div></article>)}</div>
    <div className="history-note"><Sparkles size={19}/><p><strong>The dividing line:</strong> Jonathan&apos;s historical photographs are authentic references. The 2026 Roadster adventure and projected 2032 lunar mission are entirely fictional. His birth year is estimated, not exact.</p></div>
  </div><DownloadDialog target={target} onClose={()=>setTarget(null)}/></section>;
}
