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
