/**
 * Bilingual routing.
 *
 * English stays at the root, exactly where Google already has it indexed. Do
 * not move English pages under /en/, it would throw away the rankings the whole
 * rebuild was built to protect.
 *
 * Spanish lives under /es/ with Spanish slugs, because a Spanish speaker
 * searching "gimnasio de boxeo staten island" is more likely to click a URL
 * they can read, and Google treats the slug as a ranking signal in its own
 * right. /es/preguntas-frecuentes/ beats /es/frequently-asked-questions/.
 */

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/**
 * Every page, in both languages. This is the single source of truth: the nav,
 * the footer, the language switcher and the hreflang tags all read from it, so
 * a page cannot end up linked in one language and orphaned in the other.
 */
export const routes = [
  { key: 'home', en: '/', es: '/es/' },
  { key: 'about', en: '/about-us/', es: '/es/sobre-nosotros/' },
  { key: 'newClients', en: '/new-clients/', es: '/es/nuevos-clientes/' },
  { key: 'gallery', en: '/gallery/', es: '/es/galeria/' },
  { key: 'blog', en: '/blog/', es: '/es/blog/' },
  { key: 'faq', en: '/frequently-asked-questions/', es: '/es/preguntas-frecuentes/' },
  { key: 'contact', en: '/contact-us/', es: '/es/contacto/' },
  { key: 'thanks', en: '/thank-you/', es: '/es/gracias/' },
  { key: 'privacy', en: '/privacy-policy/', es: '/es/politica-de-privacidad/' },
  { key: 'terms', en: '/terms-and-conditions/', es: '/es/terminos-y-condiciones/' },
] as const;

export type RouteKey = (typeof routes)[number]['key'];

/** Path for a page in a given language. */
export const path = (key: RouteKey, lang: Lang): string =>
  routes.find((r) => r.key === key)![lang];

/** Which language a URL belongs to, used by the layout for lang and hreflang. */
export const langFromPath = (pathname: string): Lang =>
  pathname.startsWith('/es/') || pathname === '/es' ? 'es' : 'en';

/**
 * The same page in the other language, for the switcher. Returns null when
 * there is no counterpart, so the switcher can hide rather than dump someone on
 * a 404. Blog posts are handled separately, their slugs are per-post.
 */
export const counterpart = (pathname: string, to: Lang): string | null => {
  const from: Lang = to === 'es' ? 'en' : 'es';
  const match = routes.find((r) => r[from] === pathname);
  if (match) return match[to];

  // Blog posts: /blog/<slug>/ <-> /es/blog/<slug>/, with the Spanish post
  // carrying its own slug. Resolved by the blog pages, not here.
  return null;
};
