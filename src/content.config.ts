/**
 * Content collections.
 *
 * PROJECTS — one Markdown file per project in src/content/projects/.
 * To add a project: copy an existing file, rename it, edit the frontmatter.
 *
 *   images:
 *     - file: ./my-project/front.jpg   ← your own photo (optimised automatically;
 *       alt: Describe the photo          path is relative to the .md file)
 *     - photo: cedarDoor                ← OR a key from src/data/images.ts
 *
 * categories: residential | commercial  +  garage-doors | gates | automation
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      location: z.string().optional(),
      year: z.number().optional(),
      sector: z.enum(['residential', 'commercial']),
      categories: z.array(z.enum(['garage-doors', 'gates', 'automation'])).min(1),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      images: z
        .array(
          z.object({
            photo: z.string().optional(),
            file: image().optional(),
            alt: z.string().optional(),
          }),
        )
        .min(1),
    }),
});

export const collections = { projects };
