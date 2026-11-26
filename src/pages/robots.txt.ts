import type { APIRoute } from 'astro';
import { site } from '../config/site';

/** robots.txt — blocks crawlers until `site.indexing` is switched on at launch. */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const sitemap = new URL('/sitemap-index.xml', siteUrl).toString();
  const body = site.indexing
    ? `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`
    : `# Pre-launch: indexing disabled in src/config/site.ts\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
