import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    brief: z.string(),
    date: z.string(),       // You can also use z.date() if you prefer
    thumbnail: z.string(),
    external: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
