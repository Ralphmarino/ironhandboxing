/**
 * Single source of truth for business facts.
 *
 * SEO NOTE: `seo.home.title`, `seo.home.description` and `seo.home.h1` are
 * carried over from the WordPress site on purpose. The homepage ranks well
 * locally (#2-#3 for "boxing gym staten island") and feeds the Google Business
 * Profile, so these three strings should not be rewritten casually.
 */

export const site = {
  name: 'Ironhand Boxing',
  legalName: 'Ironhand Boxing Staten Island',
  url: 'https://ironhandboxing.com',
  tagline: 'Staten Island’s premier boxing gym.',

  address: {
    street: '1230 Castleton Avenue',
    locality: 'Staten Island',
    region: 'NY',
    postalCode: '10310',
    country: 'US',
  },

  /** Update these two once confirmed against the live Contact page. */
  phone: '',
  email: 'info@ironhandboxing.com',

  social: {
    instagram: 'https://www.instagram.com/_ironhandboxing1/',
    instagramHandle: '@_ironhandboxing1',
  },

  /** Google Business Profile aggregate, as of the last review export. */
  reviews: {
    rating: 5.0,
    count: 66,
    url: 'https://www.google.com/maps/search/?api=1&query=Ironhand+Boxing+Staten+Island',
  },
} as const;

export const seo = {
  home: {
    // Preserved verbatim from the existing site.
    title: 'Staten Island Boxing - Ironhand Boxing',
    description:
      'Ironhand Boxing on Staten Island is founded by Ian Sampaga to serve, influence & inspire you, our clients and members of our community through world-class boxing training.',
    h1: 'Staten Island Boxing',
  },
} as const;

export const IG_EMBED = {
  /**
   * Third-party Instagram feed (Behold.so).
   *
   * Paste the feed ID from the Behold dashboard here — that is the only step.
   * While this is empty the site renders a curated static grid that links out
   * to Instagram, so the section is never broken or blank in production.
   */
  beholdFeedId: '',
} as const;
