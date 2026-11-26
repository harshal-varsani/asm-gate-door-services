import { getCollection, type CollectionEntry } from 'astro:content';
import { getImage } from 'astro:assets';
import { images, type ImageKey, type SiteImage } from '../data/images';

export type Project = CollectionEntry<'projects'>;

export const categoryLabels = {
  residential: 'Residential',
  commercial: 'Commercial',
  'garage-doors': 'Garage doors',
  gates: 'Gates',
  automation: 'Automation',
} as const;

export type FilterKey = keyof typeof categoryLabels;

export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Every filter key a project belongs to (sector + categories). */
export const projectKeys = (p: Project): FilterKey[] => [p.data.sector, ...p.data.categories];

type ProjectImage = Project['data']['images'][number];

/** Convert a project image (registry key or local file) into a SiteImage for <Photo>. */
export function toSiteImage(img: ProjectImage, fallbackAlt: string): SiteImage {
  if (img.file) {
    return { src: img.file, alt: img.alt ?? fallbackAlt, stock: false, origin: 'ASM project photo' };
  }
  const key = img.photo as ImageKey;
  const reg = images[key];
  if (!reg) throw new Error(`Unknown image key "${img.photo}" in a project file. See src/data/images.ts.`);
  return { ...reg, alt: img.alt ?? reg.alt };
}

/** Large source for the lightbox. */
export async function largeSrc(img: SiteImage): Promise<{ src: string; srcset: string }> {
  if (typeof img.src === 'string') {
    const base = `https://images.unsplash.com/photo-${img.src}?auto=format&fit=max&q=75`;
    return {
      src: `${base}&w=1600`,
      srcset: [1080, 1600, 2200].map((w) => `${base}&w=${w} ${w}w`).join(', '),
    };
  }
  const widths = [1080, 1600, 2200];
  const outs = await Promise.all(widths.map((w) => getImage({ src: img.src as ImageMetadata, width: w, format: 'webp' })));
  return {
    src: outs[1].src,
    srcset: outs.map((o, i) => `${o.src} ${widths[i]}w`).join(', '),
  };
}
