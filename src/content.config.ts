import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts live as markdown in src/content/blog/. The filename becomes the
 * URL slug, so `boxing-training-staten-island-benefits.md` publishes at
 * /blog/boxing-training-staten-island-benefits/, matching the WordPress URL
 * that is already indexed. Keep existing filenames when migrating posts.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Ian Sampaga'),
    image: z.string().default('/example.png'),
    imageAlt: z.string().default(''),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** Slug of the Spanish translation, if one exists. */
    translationEs: z.string().optional(),

    /**
     * Title tag, when it should differ from the H1. The H1 can afford to be
     * long and readable; the title tag has ~60 characters before Google
     * truncates it, and the layout appends " – Ironhand Boxing" on top.
     */
    seoTitle: z.string().optional(),

    /** Overrides the Open Graph image when the hero is the wrong shape for 1200x630. */
    ogImage: z.string().optional(),

    /**
     * FAQs are defined HERE, not in the post body, and the template renders
     * them and generates the FAQPage schema from this one array. Writing them
     * twice is how a page ends up telling Google something it does not say to
     * the reader.
     */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),

    /**
     * Same rule for HowTo. The steps render as the visible numbered list AND
     * feed the schema, so they cannot drift apart.
     *
     * Note: Google deprecated HowTo rich results in 2023, so this earns no
     * snippet. It is still valid markup and still helps AI answer engines parse
     * the sequence, which is why it is worth the few lines.
     */
    howTo: z
      .object({
        name: z.string(),
        description: z.string(),
        totalTime: z.string().optional(),
        supply: z.array(z.string()).default([]),
        steps: z.array(z.object({ name: z.string(), text: z.string() })),
      })
      .optional(),

    /**
     * A YouTube embed. Deliberately does NOT emit VideoObject schema, see the
     * note in src/pages/blog/[...slug].astro.
     */
    video: z
      .object({
        id: z.string(),
        title: z.string(),
        caption: z.string(),
      })
      .optional(),
  }),
});

/**
 * Spanish posts live in their own collection with their own Spanish slugs,
 * rather than as a subfolder of `blog`. A subfolder would have produced
 * /blog/es/<slug>/, which is the wrong shape: the Spanish site lives under
 * /es/, so its posts publish at /es/blog/<slug>/.
 *
 * `translationOf` points at the English post's slug. The blog pages use it to
 * build hreflang between the two, which is what stops Google reading them as
 * duplicates of each other.
 */
const blogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-es' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Ian Sampaga'),
    image: z.string().default('/example.png'),
    imageAlt: z.string().default(''),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    translationOf: z.string().optional(),
  }),
});

export const collections = { blog: blog, 'blog-es': blogEs };
