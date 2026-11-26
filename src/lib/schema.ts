/**
 * Structured data (schema.org JSON-LD) builders.
 * Only confirmed details are emitted: placeholders in src/config/site.ts are
 * skipped automatically, so nothing unverified reaches search engines.
 */
import { site, isPlaceholder } from '../config/site';
import { servicePages } from '../data/services';
import type { Faq } from '../data/services';

const abs = (path: string, base: URL | string) => new URL(path, base).toString();

export const ogImageUrl = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?fm=jpg&fit=crop&w=1200&h=630&q=72`;

export function businessSchema(base: URL | string) {
  const c = site.contact;
  const a = c.address;
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': abs('/#business', base),
    name: site.name,
    url: abs('/', base),
    description:
      'Garage doors, gates, automation and access systems, repairs and maintenance for residential and commercial properties in New Zealand.',
    image: ogImageUrl('1719773745404-d2e57e1af9bf'),
    knowsAbout: servicePages.flatMap((p) => p.categories.map((c) => c.name)),
  };

  if (!isPlaceholder(c.phoneDisplay)) data.telephone = c.phoneHref.replace('tel:', '');
  if (!isPlaceholder(c.email)) data.email = c.email;
  if (a.street && !isPlaceholder(a.street)) {
    data.address = {
      '@type': 'PostalAddress',
      streetAddress: a.street,
      addressLocality: a.suburb || a.city,
      addressRegion: a.region,
      postalCode: a.postcode,
      addressCountry: a.country,
    };
  }
  if (site.serviceArea.confirmed) {
    data.areaServed = site.serviceArea.regions
      .filter((r) => !isPlaceholder(r))
      .map((name) => ({ '@type': 'Place', name }));
  }
  const sameAs = Object.values(site.social).filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;
  return data;
}

export function serviceSchema(
  base: URL | string,
  opts: { name: string; description: string; path: string; offers: string[] },
) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: abs(opts.path, base),
    provider: { '@id': abs('/#business', base) },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: opts.name,
      itemListElement: opts.offers.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };
  if (site.serviceArea.confirmed) {
    data.areaServed = site.serviceArea.regions.filter((r) => !isPlaceholder(r));
  } else {
    data.areaServed = { '@type': 'Country', name: 'New Zealand' };
  }
  return data;
}

export function breadcrumbSchema(base: URL | string, crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path, base),
    })),
  };
}

/** FAQ schema — unconfirmed [placeholder] answers are left out. */
export function faqSchema(faqs: Faq[]) {
  const confirmed = faqs.filter((f) => !isPlaceholder(f.a));
  if (!confirmed.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: confirmed.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function websiteSchema(base: URL | string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': abs('/#website', base),
    name: site.name,
    url: abs('/', base),
    publisher: { '@id': abs('/#business', base) },
    inLanguage: 'en-NZ',
  };
}
