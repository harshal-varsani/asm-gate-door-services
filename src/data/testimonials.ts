/**
 * Testimonials — ONLY add genuine customer reviews, with permission.
 * The testimonials section on the home page is hidden while this list is empty.
 *
 * Example:
 *   { quote: 'Great job…', name: 'Jane D.', location: 'Suburb', source: 'Google review' },
 */
export interface Testimonial {
  quote: string;
  name: string;
  location?: string;
  source?: string;
}

export const testimonials: Testimonial[] = [];
