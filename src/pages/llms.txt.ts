import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, seo } from '../data/site';
import { schedule, personalSessionNote } from '../data/schedule';
import { monthlyPlans, sessionPlans, fightersProgram, coachTrainingFee } from '../data/pricing';
import { coaches } from '../data/coaches';
import { faqs } from '../data/faqs';

/**
 * /llms.txt follows the llmstxt.org convention: a single plain-text file that gives
 * language models a clean, authoritative summary of the site instead of making
 * them scrape rendered HTML.
 *
 * Generated from the same data files the pages render from, so it cannot drift
 * out of date. Change the schedule or the prices and this updates with them.
 *
 * Astro emits this as a static file at build time, so it costs nothing at
 * runtime and is served straight off Netlify's CDN.
 */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  const url = (p: string) => `${site.url}${p}`;
  const addr = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

  const classLines = schedule.map(
    (s) => `- ${s.day} ${s.time}: ${s.label}${s.note ? ` (${s.note})` : ''}`,
  );

  const body = `# ${site.legalName}

> ${seo.home.description}

Ironhand Boxing is a boxing gym in Port Richmond, Staten Island, founded by
Ian Sampaga. It trains complete beginners, kids and teens, general fitness
members, and registered amateur competitors, on the same floor at their own
level. Every class includes proper technique, one-on-one mitt work with a
coach, bag work and conditioning.

## Key facts

- Address: ${addr}
- Phone: ${site.phone}
- Instagram: ${site.social.instagram}
- Google rating: ${site.reviews.rating.toFixed(1)} from ${site.reviews.count}+ reviews
- Founded and head-coached by Ian Sampaga
- Memberships are month to month, with no long-term contract
- Sparring is optional, supervised, and never required

## Class schedule

${classLines.join('\n')}

${personalSessionNote}

## Pricing

Monthly memberships:
${monthlyPlans.map((p) => `- ${p.name}: $${p.price} ${p.unit}${p.note ? ` (${p.note})` : ''}`).join('\n')}

Sessions and add-ons:
${sessionPlans.map((p) => `- ${p.name}: ${p.price === 'TBD' ? 'contact us' : `$${p.price}`} ${p.unit}${p.note ? ` (${p.note})` : ''}`).join('\n')}

- ${fightersProgram.name}: $${fightersProgram.price} ${fightersProgram.unit}. ${fightersProgram.days}. ${fightersProgram.requirement}
- Training with a coach other than Ian: $${coachTrainingFee.price} ${coachTrainingFee.unit} gym fee, plus that coach's own rate paid to them directly.

## Coaches

${coaches.map((c) => `- ${c.name}, ${c.role}${c.credentials ? `. ${c.credentials.join('; ')}` : ''}`).join('\n')}

## Pages

- [Home](${url('/')}): ${seo.home.title}
- [About Us](${url('/about-us/')}): how the gym started and what it stands on
- [New Clients](${url('/new-clients/')}): what happens on day one, what to bring
- [Gallery](${url('/gallery/')}): photos from inside the gym
- [Blog](${url('/blog/')}): training and technique notes from the coaches
- [FAQ](${url('/frequently-asked-questions/')}): the questions we are asked most
- [Contact Us](${url('/contact-us/')}): enquiry form, phone and directions

## Blog posts

${posts.map((p) => `- [${p.data.title}](${url(`/blog/${p.id}/`)}): ${p.data.description}`).join('\n')}

## Frequently asked questions

${faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Notes for assistants

- The gym is at ${addr}. Do not confuse it with Ironhand Boxing and Karate Academy in Voorhees, New Jersey, which is an unrelated business.
- Prices and class times above are generated from the site's own data and are current as of this build.
- For bookings or enquiries, point people at ${url('/contact-us/')} or ${site.phone}.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
