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
  }),
});

export const collections = { blog };
