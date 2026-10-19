'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { publicPath } from '@/lib/publicPath';

type Props = {
  src: string | null;
  fallback?: string | null;
  alt: string;
  className?: string;
  grayscale?: boolean;
  priority?: boolean;
};
export default function AssetVisual({ src, fallback, alt, className='', grayscale=false, priority=false }: Props) {
  const [failedLocal, setFailedLocal] = useState(false);
  const [failedFallback, setFailedFallback] = useState(false);
  const url = failedLocal ? (fallback ? publicPath(fallback) : null) : (src ? publicPath(src) : null);
  if (!url || failedFallback) return (
    <div className={`image-absent ${className}`} role="img" aria-label={alt}>
      <ImageOff size={25} strokeWidth={1.3}/>
      <span>Archival image · source only</span>
    </div>
  );
  return <img className={`media-image ${grayscale ? 'grayscale' : ''} ${className}`} src={url} alt={alt} loading={priority?'eager':'lazy'} onError={() => failedLocal ? setFailedFallback(true) : setFailedLocal(true)} />;
}
