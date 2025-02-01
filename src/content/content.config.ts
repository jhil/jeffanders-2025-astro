import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		brief: z.string(),
		date: z.date(),
		thumbnail: z.string(),
		external: z.string().url().optional(),
	}),
});

export const collections = { projects };
