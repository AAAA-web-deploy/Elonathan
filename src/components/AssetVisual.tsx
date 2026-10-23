'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { displayImages } from '@/generated/displayImages';
import { publicPath } from '@/lib/publicPath';

type Props = {
  src: string | null;
  fallback?: string | null;
  alt: string;
  className?: string;
  grayscale?: boolean;
  priority?: boolean;
  full?: boolean;
  sizes?: string;
};
export default function AssetVisual({ src, fallback, alt, className='', grayscale=false, priority=false, full=false, sizes='(max-width: 720px) 92vw, 420px' }: Props) {
  const [failedLocal, setFailedLocal] = useState(false);
  const [failedFallback, setFailedFallback] = useState(false);
  const record = src ? displayImages[src] : undefined;
  const useDisplay = Boolean(record && !full && !failedLocal);
  const local = src ? publicPath(useDisplay && record ? record.src : src) : null;
  const remote = fallback ? publicPath(fallback) : null;
  const url = !failedLocal && local ? local : !failedFallback && remote ? remote : null;
  if (!url) return (
    <div className={`image-absent ${className}`} role="img" aria-label={alt}>
      <ImageOff size={25} strokeWidth={1.3}/>
      <span>Archival image · source only</span>
    </div>
  );
  const srcSet = useDisplay && record ? record.variants.map((item) => `${publicPath(item.path)} ${item.w}w`).join(', ') : undefined;
  return <img className={`media-image ${grayscale ? 'grayscale' : ''} ${className}`} src={url} srcSet={srcSet} sizes={srcSet ? sizes : undefined} width={record?.width} height={record?.height} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding={priority ? 'auto' : 'async'} fetchPriority={priority ? 'high' : 'auto'} referrerPolicy="no-referrer" onError={() => local && url === local ? setFailedLocal(true) : setFailedFallback(true)} />;
}
