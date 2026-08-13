import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts: src/content/blog/*.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Research projects: src/content/research/*.md
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    summary: z.string(), // 1–2 paragraph abstract; use a YAML `|` block for line breaks
    role: z.string().optional(),
    // Optional links — omit any that don't apply to a given project.
    // All but `code` accept either an absolute URL or a site-root path like "/pdf/name.pdf".
    writeup: z.string().optional(),
    paper: z.string().optional(),
    code: z.string().url().optional(),
    poster: z.string().optional(),
    order: z.number().default(0), // lower = higher on the page
  }),
});

export const collections = { blog, research };
