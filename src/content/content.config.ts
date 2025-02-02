import { defineCollection, z } from "astro:content";

const commonSchema = {
	title: z.string(),
	date: z.date(),
};

const projects = defineCollection({
	schema: z.object({
		...commonSchema,
		brief: z.string(),
		cover: z.string(),
		external: z.string().url().optional(),
	}),
});

const lists = defineCollection({
	schema: z.object({
		...commonSchema,
		icon: z.string(),
	}),
});

export const collections = { projects, lists };
