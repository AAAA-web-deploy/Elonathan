'use client';
import { useEffect, useRef, useState } from 'react';
import { Download, X, AlertTriangle } from 'lucide-react';
import { publicPath } from '@/lib/publicPath';

export type DownloadTarget = { src: string; title: string; suggestedName: string; credit?: string };
export function DownloadDialog({ target, onClose }: { target: DownloadTarget | null; onClose: () => void }) {
  if (!target) return null;
  return <DownloadDialogContent key={target.src + target.title} target={target} onClose={onClose}/>;
}
function DownloadDialogContent({ target, onClose }: { target: DownloadTarget; onClose: () => void }) {
  const [name, setName] = useState(target.suggestedName);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { closeRef.current?.focus(); }, []);
  useEffect(() => {
    if (!target) return;
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [target, onClose]);

  async function download() {
    if (!target) return;
    setBusy(true); setError('');
    try {
      // Use a same-origin resource to preserve the caller's selected filename.
      if (!target.src.startsWith('/assets/')) throw new Error('This image is not installed locally. Open the original source instead.');
      const resp = await fetch(publicPath(target.src));
      if (!resp.ok) throw new Error('The original photo is not installed. Run npm run fetch:photos first.');
      const blob = await resp.blob();
      if (!blob.type.startsWith('image/')) throw new Error('The requested file is not a valid image.');
      const ext = target.src.split('.').pop()?.toLowerCase() || 'jpg';
      const userName = (name.trim() || target.suggestedName).replace(/[\\/:*?"<>|]/g, '-').replace(/^\.+/, '') || 'elonathan-meme';
      const filename = /\.(jpe?g|png|webp)$/i.test(userName) ? userName : `${userName}.${ext}`;
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a'); anchor.href = url; anchor.download = filename;
      document.body.appendChild(anchor); anchor.click(); anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 4000);
      onClose();
    } catch (e) { setError(e instanceof Error ? e.message : 'Download failed.'); }
    finally { setBusy(false); }
  }
  return <div className="overlay" onMouseDown={onClose} role="presentation">
    <div className="download-dialog" role="dialog" aria-modal="true" aria-labelledby="download-dialog-title" onMouseDown={e=>e.stopPropagation()}>
      <button ref={closeRef} aria-label="Close" onClick={onClose} className="dialog-close"><X size={20}/></button>
      <span className="eyebrow">YOUR IMAGE, YOUR FILENAME</span>
      <h3 id="download-dialog-title">Download {target.title}</h3>
      <label htmlFor="filename">Custom filename</label>
      <input id="filename" value={name} onChange={e=>setName(e.target.value)} maxLength={120} placeholder="jonathan-meme" />
      {target.credit && <p className="tiny-muted">Credit: {target.credit}. Keep original attribution when reusing licensed photos.</p>}
      {error && <p className="download-error"><AlertTriangle size={15}/> {error}</p>}
      <button className="btn btn-primary full" disabled={busy} onClick={download}><Download size={17}/>{busy?'Preparing…':'Save image'}</button>
    </div>
  </div>;
}
