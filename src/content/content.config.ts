import { defineCollection, z } from "astro:content";

const commonSchema = {
	title: z.string(),
	date: z.date(),
};

// Schema for podcast entries
const podcastSchema = z.object({
	title: z.string(),
	cover: z.string(),
	url: z.string().url(),
	category: z.string(),
});

const podcasts = defineCollection({
	type: "data",
	schema: z.array(podcastSchema),
});

const projects = defineCollection({
	schema: z.object({
		...commonSchema,
		brief: z.string(),
		cover: z.string(),
		external: z.string().url().optional(),
		color: z.string().optional(),
		link: z.string().url().optional(),
	}),
});

const lists = defineCollection({
	schema: z.object({
		...commonSchema,
		icon: z.string().optional(),
		external: z.string().url().optional(),
		link: z.string().url().optional(),
		color: z.string().optional(),
	}),
});

const talks = defineCollection({
	schema: z.object({
		...commonSchema,
		title: z.string(),
		brief: z.string(),
		cover: z.string(),
		external: z.string().url(),
		color: z.string().optional(),
		category: z.literal("talk"),
	}),
});

// Export all collections
export const collections = { projects, lists, podcasts, talks };
