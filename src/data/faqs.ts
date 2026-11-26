/**
 * Home page FAQs. Service-specific FAQs live with each service in
 * src/data/services.ts. Answers in [brackets] need ASM to confirm.
 */
import type { Faq } from './services';
import { site } from '../config/site';

export const homeFaqs: Faq[] = [
  {
    q: 'What areas do you cover?',
    a: `We work across ${site.serviceArea.primary}. ${site.serviceArea.note}`,
  },
  {
    q: 'Do you work on homes and commercial properties?',
    a: 'Yes. We install and service garage doors, gates and access systems for homes, and for commercial sites such as warehouses, yards, retail and apartment car parks.',
  },
  {
    q: 'Can you automate my existing gate or garage door?',
    a: 'Often, yes. It depends on the condition, weight and hanging of the door or gate. We check on site and tell you whether it makes more sense to automate, repair or replace.',
  },
  {
    q: 'How much does a new garage door or gate cost?',
    a: 'Price depends on size, type, materials, finish and automation. We quote after seeing the site and talking through options, so the price reflects your actual opening and needs.',
  },
  {
    q: 'Is there a warranty?',
    a: '[Add ASM’s product and workmanship warranty terms.]',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the quote form (photos help) or call us. We’ll come back to you to talk through the job and arrange a site visit if needed.',
  },
];
