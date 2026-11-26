/**
 * Post-build step for hosting the site under a sub-path, e.g. GitHub Pages at
 * https://<user>.github.io/<repo>/. The site's links are written root-relative
 * ("/contact/"), which is right for the real domain; this rewrites the built
 * files in dist/ so they point at "/<repo>/contact/" instead.
 *
 * Usage: BASE_PATH=/asm-gate-door-services SITE_ORIGIN=https://user.github.io node scripts/rebase-for-subpath.mjs
 * Only used by the GitHub Pages workflow; normal builds are untouched.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = (process.env.BASE_PATH || '').replace(/\/+$/, '');
const origin = (process.env.SITE_ORIGIN || '').replace(/\/+$/, '');
if (!base.startsWith('/')) {
  console.error('BASE_PATH must start with "/", e.g. /asm-gate-door-services');
  process.exit(1);
}
const PLACEHOLDER_ORIGIN = 'https://www.example.com';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

// A root-relative URL: "/" followed by anything except a second "/" (protocol-relative).
// Already-rebased URLs are skipped, so running the script twice is harmless.
const rel = `/(?!/|${base.slice(1)}/)`;
const rewriteHtml = (s) =>
  s
    // attributes: href, src, action, poster, content (og:url etc. are absolute, handled below)
    .replace(new RegExp(`(\\s(?:href|src|action|poster|data-src|data-href)=["'])${rel}`, 'g'), `$1${base}/`)
    // srcset lists: every entry that starts with "/"
    .replace(/(\ssrcset=["'])([^"']*)/g, (_, a, list) => a + list.replace(new RegExp(`(^|,\\s*)${rel}`, 'g'), `$1${base}/`))
    // CSS url(/...) inside inline styles and <style>
    .replace(new RegExp(`url\\((["']?)${rel}`, 'g'), `url($1${base}/`);

const rewriteCss = (s) => s.replace(new RegExp(`url\\((["']?)${rel}`, 'g'), `url($1${base}/`);

const rewriteAbsolute = (s) => (origin ? s.split(PLACEHOLDER_ORIGIN + '/').join(`${origin}${base}/`) : s);

let count = 0;
for await (const file of walk(dist)) {
  const ext = extname(file);
  if (!['.html', '.css', '.xml', '.txt', '.webmanifest'].includes(ext)) continue;
  const before = await readFile(file, 'utf8');
  let after = before;
  if (ext === '.html') after = rewriteHtml(after);
  if (ext === '.css') after = rewriteCss(after);
  after = rewriteAbsolute(after);
  if (after !== before) {
    await writeFile(file, after);
    count++;
  }
}
console.log(`Rebased ${count} files to ${base}/`);
