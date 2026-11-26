# Product

<!-- impeccable:product-schema 1 -->

> Written from the client's build brief (2026-11-26). The client asked for autonomous execution without an interview round, so every fact below is either stated in that brief or marked **[inferred]** / **[open]**. Do not treat open items as confirmed.

## Platform

web

## Stack

delegated: Astro 7 static site (file-based routes, zero-JS-by-default pages, content collection for projects, `@astrojs/sitemap`). Chosen because the site is a content-led, SEO-critical, multi-page marketing site that needs reusable components and fast static hosting, without a server to maintain. The quote form targets Netlify Forms by default, with a configurable endpoint (Formspree or similar) as the alternative.

## Users

- **Homeowners** in New Zealand replacing, upgrading or automating a garage door or driveway gate, often researching on a phone in the evening, comparing options and looking for someone they can trust to come and measure. **[inferred]**
- **Homeowners with a fault**: a door that will not open, a gate motor that has stopped, a remote that no longer works. Urgent, mobile, want to call or send photos fast. **[inferred]**
- **Commercial property owners and managers** (warehouses, yards, apartment car parks, retail): roller doors, security gates, access control, servicing. **[inferred]**
- **Builders, architects and renovators** specifying a door or gate on a new build. **[inferred]**

## Product Purpose

The website for ASM Gate & Door Services. It exists to generate enquiries and quote requests: a visitor should understand what ASM does within seconds, find the relevant service, see examples of work, trust the business, and call or request a quote, especially from a phone.

## Positioning

ASM covers the whole entrance in one team: garage doors, gates, the automation and access systems that run them, and the repairs and servicing that keep them working, for residential and commercial properties. Brand personality from the brief: professional, reliable, modern, premium, approachable, skilled, trustworthy, local New Zealand business.

## Operating Context

- Service categories (from brief): garage doors (sectional, roller, tilt, insulated, custom, architectural, replacement); gates (automatic, sliding, swing, residential, commercial, custom, architectural); automation and access (gate automation, garage door openers, remotes, smart access, keypads, intercom integration, access control, safety systems); repairs and maintenance (garage door repairs, gate repairs, motor and opener troubleshooting, remote issues, maintenance, servicing, safety inspections).
- Which of these ASM actually offers is **[open]**: the brief says "where applicable". The site presents all of them; remove any that do not apply in `src/data/services.ts`.

## Capabilities and Constraints

- Business details are **[open]** and held in one place, `src/config/site.ts`: phone, email, address, service area/regions, hours, social links, licences, warranty terms, years of experience, logo.
- Product brands, integrations and supplier names are **[open]**. Do not claim a brand, integration or smart-home platform until confirmed.
- Form delivery backend is **[open]**: works on Netlify with no setup; otherwise set an endpoint in `src/config/site.ts`.
- Geographic SEO is configurable; service-area landing pages generate from `src/data/service-areas.ts` once real areas are entered.

## Brand Commitments

- Name: **ASM Gate & Door Services**.
- Visual direction pinned by the client: premium, modern, architectural and industrial; modern residential architecture, premium garage doors, contemporary automatic gates, steel, timber, concrete, clean lines, strong photography. Palette direction: deep charcoal / near-black, white / off-white, warm neutrals, a subtle metallic or muted accent. Typography bold, modern, highly readable.
- Explicitly unwanted: generic WordPress/template look, excessive gradients, cartoon illustrations, excessive rounded cards, overly colourful layouts, unnecessary animation, cheap stock imagery, clutter, a generic AI-generated look.
- No logo supplied. The wordmark and panel mark in `src/components/Logo.astro` are placeholders. **[open]**

## Evidence on Hand

- None supplied: no project photos, testimonials, reviews, ratings, certifications, warranty terms, years in business, team details or company history.
- Photography on the site is licensed stock (Unsplash licence) used as representative imagery, catalogued with provenance in `src/data/images.ts`. Project cards say they are representative until real ASM project photos replace them.
- The site must not invent testimonials, ratings, review counts, certifications, years of experience, addresses or team members. The testimonials section only renders when real entries exist in `src/data/testimonials.ts`.

## Product Principles

1. **Enquiry is always one step away.** Call and quote actions are visible on every page and on every phone screen, without shouting.
2. **Show the work, then the words.** Lead with real-looking imagery of doors and gates; copy explains, it does not decorate.
3. **Honest by construction.** Unknown facts stay visible placeholders in one config file; nothing is claimed that ASM has not confirmed.
4. **Explain like a good tradesperson.** Help visitors choose between door and gate types in plain language; that is also the local SEO foundation.
5. **Easy for ASM to own.** Contact details, services, projects, FAQs and service areas are data files a non-developer can edit.

## Accessibility & Inclusion

WCAG 2.2 AA as the working standard **[inferred]**: keyboard navigation, visible focus, accessible forms with clear errors, sufficient contrast on photography, and reduced-motion support (the brief requires it).
