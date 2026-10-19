export type HistoryEntry = {
  id: string;
  year: string;
  title: string;
  description: string;
  kind: 'archive' | 'fiction';
  file: string | null;
  external: string | null;
  source: string | null;
  credit: string;
  permission: 'approved' | 'source-only' | 'fiction';
  note?: string;
};
export type GalleryEntry = {
  id: string;
  title: string;
  caption: string;
  kind: 'real' | 'fiction';
  file: string;
  fallback?: string;
  grayscale?: boolean;
  source?: string;
  credit?: string;
  aspect: 'wide' | 'portrait' | 'square';
  alt: string;
};
