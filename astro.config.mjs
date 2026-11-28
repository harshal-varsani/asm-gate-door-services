// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * SITE_URL — the live domain (no trailing slash).
 * It is used for canonical URLs, Open Graph tags, structured data and the sitemap.
 */
const SITE_URL = 'https://www.asmdoors.co.nz';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      // /film/ is an alternative design of the same content (noindexed).
      filter: (page) => !/\/(thank-you|404|film)\/?$/.test(page),
    }),
  ],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
