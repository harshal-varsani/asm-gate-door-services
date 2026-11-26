/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ASM Gate & Door Services — business details
 * ─────────────────────────────────────────────────────────────────────────────
 *  This is the ONE place to update company information. Every page, the
 *  footer, the contact page, structured data (SEO) and the quote form read
 *  from here.
 *
 *  Anything wrapped in [square brackets] is a placeholder that has NOT been
 *  confirmed by ASM. Replace it with the real detail, or remove the item.
 *  Placeholders are deliberately visible so nothing is published by accident.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'ASM Gate & Door Services',
  shortName: 'ASM',
  legalName: '[Registered company name]',

  /** Used in page titles and meta descriptions. */
  tagline: 'Garage doors, gates, automation and repairs',

  /**
   * Search engine indexing. Leave `false` while placeholders remain so search
   * engines don't index unfinished details. Set to `true` at launch.
   */
  indexing: false,

  contact: {
    /** What visitors see. */
    phoneDisplay: '[0800 000 000]',
    /** What phones dial. International format, digits only after the +. */
    phoneHref: 'tel:+64000000000',
    email: '[enquiries@yourdomain.co.nz]',
    /** Street address — only shown if filled in. Leave '' for a service-area business. */
    address: {
      street: '',
      suburb: '',
      city: '',
      region: '',
      postcode: '',
      country: 'NZ',
    },
    hours: [
      { days: 'Monday – Friday', time: '[7:30am – 5:00pm]' },
      { days: 'Saturday', time: '[By appointment]' },
    ],
  },

  /**
   * Service area. `primary` appears in headings and copy, e.g. "across Auckland".
   * `regions` is the list shown on the home and contact pages, and drives
   * `areaServed` in structured data once `confirmed` is true.
   */
  serviceArea: {
    confirmed: false,
    primary: '[your region]',
    regions: ['[Area one]', '[Area two]', '[Area three]', '[Area four]', '[Area five]', '[Area six]'],
    note: 'Outside these areas? Ask us. Larger and commercial projects can often be arranged.',
  },

  /**
   * Trust facts shown under the hero and in "Why ASM". Only list things that
   * are true. Items with `placeholder: true` are shown with their brackets so
   * they are easy to spot; replace the text and set placeholder to false.
   */
  // The hero shows the FIRST FOUR items that are not placeholders, so once the
  // specific facts at the top are confirmed they replace the generic ones below.
  trust: [
    { label: '[X] years in the trade', placeholder: true },
    { label: '[Workmanship warranty]', placeholder: true },
    { label: 'Locally owned New Zealand business', placeholder: false },
    { label: 'Residential & commercial', placeholder: false },
    { label: 'Doors, gates & automation', placeholder: false },
    { label: 'Repairs & servicing', placeholder: false },
  ],

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    google: '', // Google Business Profile URL
  },

  /**
   * Quote form delivery.
   *  - 'netlify'  : works automatically when the site is hosted on Netlify
   *                 (Netlify Forms, includes photo uploads). No setup needed
   *                 beyond turning on form notifications in the Netlify UI.
   *  - 'endpoint' : POSTs multipart form data to `endpoint` (e.g. Formspree,
   *                 Basin, Getform or your own API). Set the URL below.
   */
  form: {
    provider: 'netlify' as 'netlify' | 'endpoint',
    endpoint: '',
    name: 'quote-request',
    maxPhotos: 5,
    maxPhotoMB: 8,
  },

  /** Show a small "Representative image" tag on stock project imagery. */
  labelStockImagery: true,
} as const;

export type Site = typeof site;

/** True when a string still contains an unconfirmed [placeholder]. */
export const isPlaceholder = (value: string | undefined | null) =>
  !value || /\[[^\]]+\]/.test(value);
