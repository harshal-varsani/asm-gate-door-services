/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Service-area landing pages (local SEO)
 * ─────────────────────────────────────────────────────────────────────────────
 *  Each entry with `published: true` generates a page at
 *  /service-areas/<slug>/ — e.g. "Garage doors & gates in Hamilton".
 *
 *  Only publish areas ASM genuinely services, and write a genuinely local
 *  intro for each (suburbs covered, typical properties, local conditions).
 *  Thin copy-and-paste area pages can hurt search rankings.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { ImageKey } from './images';

export interface ServiceArea {
  slug: string;
  name: string;
  published: boolean;
  intro: string;
  suburbs: string[];
  image: ImageKey;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'example-area',
    name: '[Area name]',
    published: false,
    intro:
      '[Write a local introduction: which suburbs you cover in this area, the kinds of homes and businesses you work with, and anything local that matters, such as coastal exposure, hillside driveways or new subdivisions.]',
    suburbs: ['[Suburb]', '[Suburb]', '[Suburb]'],
    image: 'newBuild',
  },
];

export const publishedAreas = serviceAreas.filter((a) => a.published);
