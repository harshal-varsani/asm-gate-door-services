# ASM Gate & Door Services — website

A fast, static marketing website built with [Astro](https://astro.build). Pages are pre-rendered HTML with a small amount of JavaScript only where it earns its place: the menu, the gallery, the quote form and the hero animation.

```
npm install        # once
npm run dev        # local development at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run check      # type-check the project
```

Requires Node 22.23 or newer (Astro 7).

---

## Before launch: checklist

Everything unconfirmed is a visible `[placeholder]` (dotted underline on the page), so nothing is published by accident.

1. **Business details**: edit `src/config/site.ts`: phone, email, address (optional), hours, service area and regions, trust facts, legal name, social links.
2. **Live domain**: set `SITE_URL` in `astro.config.mjs` (used for canonical URLs, Open Graph, structured data and the sitemap).
3. **Turn on search indexing**: set `indexing: true` in `src/config/site.ts`. While it is `false`, every page carries `noindex` and `robots.txt` blocks crawlers.
4. **Quote form delivery**: see [Quote form](#quote-form) below, then send a test enquiry on the live site.
5. **Placeholder copy**: search the project for `[` inside quotes, e.g. in `src/data/services.ts` (FAQ answers about warranty, lead times, brands), `src/pages/about.astro` (story, team, credentials), `src/components/home/WhyAsm.astro` (credentials) and `src/pages/privacy.astro` (have the privacy policy reviewed).
6. **Services you don't offer**: delete those categories from `src/data/services.ts`.
7. **Logo**: `src/components/Logo.astro` is a placeholder wordmark; replace it with the real logo, and update `public/favicon.svg` and `public/apple-touch-icon.png`.
8. **Photography**: replace representative stock photos with ASM's own project photos (see [Images](#images)). Then set `labelStockImagery: false` in `src/config/site.ts` once no stock images remain.
9. **Google Business Profile**: add its URL to `site.social.google` so it appears in the footer and structured data.

---

## Where things live

| What | File |
| --- | --- |
| Business details, form settings, indexing switch | `src/config/site.ts` |
| Service pages content (categories, comparisons, FAQs) | `src/data/services.ts` |
| Home page FAQs | `src/data/faqs.ts` |
| Every photo (one registry) | `src/data/images.ts` |
| Home hero reel (slides, captions, links) | `src/components/home/HomeHero.astro` |
| Projects gallery | `src/content/projects/*.md` |
| Testimonials (hidden until real ones are added) | `src/data/testimonials.ts` |
| Service-area landing pages (local SEO) | `src/data/service-areas.ts` |
| Design tokens: colours, type, spacing | `src/styles/global.css` |
| Pages | `src/pages/` |
| Shared components | `src/components/` |

### Images

All photos are referenced by name from `src/data/images.ts`. The current photos are **representative stock images** from Unsplash (free commercial licence), served from Unsplash's CDN with automatic AVIF/WebP and responsive sizes. Their source is recorded in each entry.

To use your own photo:

1. Put the file in `src/assets/photos/` (at least 2400px wide for full-width images).
2. Import it at the top of `src/data/images.ts` and set it as that entry's `src`, with `stock: false`.

Astro optimises local photos automatically at build time (AVIF/WebP, responsive sizes).

### Projects

Each project is a Markdown file in `src/content/projects/`. To add one, copy an existing file and edit the frontmatter:

```yaml
---
title: Cedar sectional door
summary: One or two sentences about the job.
location: Suburb
sector: residential          # or commercial
categories: [garage-doors, automation]   # garage-doors | gates | automation
featured: true               # show on the home page (first five)
order: 1                     # lower numbers appear first
images:
  - file: ./cedar-sectional/front.jpg    # your photo, relative to this .md file
    alt: Describe what the photo shows
  - photo: cedarDoor                     # or a key from src/data/images.ts
---
```

The gallery's filters, counts and lightbox update automatically.

### Service-area pages

Each entry in `src/data/service-areas.ts` with `published: true` generates `/service-areas/<slug>/`. Only publish areas you genuinely service, and write a real local introduction for each; thin, duplicated area pages can hurt rankings. Published areas are also linked from the home page "Where we work" list when their name matches a region in `site.serviceArea.regions`.

---

## Quote form

The form (contact page and repairs page) validates in the browser, shrinks large phone photos before upload, and shows sending, success and error states. Without JavaScript it still submits and lands on `/thank-you/`.

Choose delivery in `src/config/site.ts → form.provider`:

- **`'netlify'` (default)**: host the site on [Netlify](https://www.netlify.com). Netlify Forms detects the form at deploy time, including photo uploads, with no code changes. In the Netlify dashboard go to **Forms → Form notifications** and add an email notification. A spam honeypot field is already included.
- **`'endpoint'`**: for any other host. Set `form.endpoint` to a form-handling service URL (e.g. Formspree, Basin, Getform) or your own API. The form POSTs `multipart/form-data` with fields `service`, `property_type`, `name`, `phone`, `email`, `address`, `message`, `consent`, `source_page` and `photo-1` … `photo-5`. File uploads may require a paid plan on some services.

In local development (`npm run dev`) with the Netlify provider, submissions are simulated (logged to the browser console) because Netlify Forms only exists once deployed.

Links can preselect the form: `/contact/?service=gate&type=Sliding%20gates&property=commercial#quote`.

---

## SEO

- Per-page titles, meta descriptions, canonical URLs, Open Graph and Twitter cards (`src/layouts/BaseLayout.astro`).
- Structured data (`src/lib/schema.ts`): `HomeAndConstructionBusiness`, `WebSite`, `Service` (with offer catalogue) on each service page, `BreadcrumbList` and `FAQPage`. Unconfirmed details (placeholder phone, `example.com` email, unconfirmed service area, placeholder FAQ answers) are left out automatically, so no unverified facts are published.
- `sitemap-index.xml` is generated at build; `robots.txt` follows the `indexing` switch.
- Clean URLs: `/garage-doors/`, `/gates/`, `/automation-access/`, `/repairs-maintenance/`, `/projects/`, `/about/`, `/contact/`.

## Deployment

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Build command `npm run build`, publish directory `dist`.

**Current hosting: GitHub Pages** at `https://www.asmdoors.co.nz`. Every push to `main` deploys via `.github/workflows/pages.yml`; the custom domain is set in the repo's Pages settings and in `public/CNAME`. The build uses `PUBLIC_PREVIEW_SITE=true` because GitHub Pages has no form backend, so the quote form tells visitors it isn't connected instead of pretending to send. To take real enquiries, either move hosting to Netlify (and drop that variable), or switch `form.provider` to `'endpoint'` with a form service URL and remove the variable from the workflow.

## Accessibility & performance notes

- Semantic landmarks, skip link, one `h1` per page, labelled controls, keyboard-operable menu, accordion, gallery filters and lightbox (native `<dialog>`), visible focus states.
- Form errors are announced and linked to their fields; focus moves to the first problem.
- `prefers-reduced-motion` removes the hero door animation and image wipes.
- Self-hosted variable font (Archivo), preloaded; images lazy-load below the fold with responsive `srcset`.
