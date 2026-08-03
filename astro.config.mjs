import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live WordPress site serves every page with a trailing slash
// (/about-us/, /blog/, ...). Google has those URLs indexed and the site ranks
// well locally, so the rebuild keeps the exact same URL shapes: `directory`
// format emits /about-us/index.html, and trailingSlash:'always' makes internal
// links agree with it. Do not change these two without setting up redirects.
export default defineConfig({
  site: 'https://ironhandboxing.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      // Both thank-you pages are noindex; keep them out of the sitemap too,
      // otherwise Search Console reports them as 'excluded by noindex' errors.
      filter: (page) => !page.includes('/thank-you') && !page.includes('/es/gracias'),
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
