import { defineCollection, z } from "astro:content";
import { parseCsvFile } from "../utils/csvParser";

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
	}),
});

const lists = defineCollection({
	schema: z.object({
		...commonSchema,
		icon: z.string(),
	}),
});

export const collections = { projects, lists, podcasts };
