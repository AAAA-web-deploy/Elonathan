export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

/** Prefix a same-origin public file so GitHub Pages project sites can find it. */
export function publicPath(src: string): string {
  if (!src.startsWith('/') || src.startsWith('//')) return src;
  return `${basePath}${src}`;
}
