import { displayImages } from '@/generated/displayImages';
import { publicPath } from '@/lib/publicPath';

export function displayAttrs(original: string, sizes: string) {
  const record = displayImages[original];
  if (!record) return { src: publicPath(original), width: undefined as number | undefined, height: undefined as number | undefined };
  const srcSet = record.variants.map((item) => `${publicPath(item.path)} ${item.w}w`).join(', ');
  return {
    src: publicPath(record.src),
    srcSet,
    sizes,
    width: record.width,
    height: record.height,
  };
}
