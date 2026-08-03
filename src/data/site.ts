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

  phone: '347-499-4133',

  /**
   * Spanish line. Ian's wife handles these calls, so this is a real person who
   * speaks Spanish rather than a menu. The label is written in Spanish on
   * purpose: someone scanning the page for help in their own language needs to
   * recognise it without reading the English around it.
   */
  phoneEs: {
    number: '718-619-0468',
    label: '¿Hablas español?',
    note: 'Llámanos y te atendemos en español.',
  },

  /**
   * Never rendered as visible text, the site links it as "Email us" instead.
   * Note the address is still present in the mailto: href, so a determined
   * scraper can read it from the page source. If you want it fully off the
   * site, point those links at /contact-us/ instead and let the form carry it.
   */
  email: 'iansampaga1@gmail.com',

  social: {
    instagram: 'https://www.instagram.com/_ironhandboxing1',
    instagramHandle: '@_ironhandboxing1',
  },

  /** Footer credit. */
  builtBy: {
    label: 'Site Built & Powered by Growth Local',
    url: 'https://growthlocal.com',
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
    // Carried over verbatim from the live site, do not rewrite casually.
    title: 'Staten Island Boxing - Ironhand Boxing Gym & Training',
    description:
      'Train like the pros with world-class boxing classes here. The #1 Staten Island Boxing lessons in NY brought to you by Ian Sampaga.',
    h1: 'Staten Island Boxing',
  },
} as const;

/** Scrolling announcement strip above the header on the homepage. */
export const announcement =
  "Welcome to Ironhand Boxing - Staten Island's Premier Boxing Training & Gym";

/**
 * Where contact form submissions are emailed.
 *
 * ⚠️ Netlify does NOT read this, form notification recipients can only be set
 * in the Netlify dashboard (Forms → contact → Settings → Form notifications →
 * Add notification → Email notification). This list exists so the intended
 * recipients are recorded in the repo; add BOTH addresses there after the first
 * deploy or submissions will sit in the dashboard unseen.
 */
export const formRecipients = ['iansampaga1@gmail.com', 'ralph@growthlocal.com'] as const;

export const IG_EMBED = {
  /**
   * Third-party Instagram feed (Behold.so).
   *
   * Paste the feed ID from the Behold dashboard here, that is the only step.
   * While this is empty the site renders a curated static grid that links out
   * to Instagram, so the section is never broken or blank in production.
   */
  beholdFeedId: '',
} as const;
