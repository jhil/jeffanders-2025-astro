// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: process.env.CI ? "https://jeffanders.co" : "http://localhost:4321",

	integrations: [react(), mdx(), icon(), robotsTxt()],

	vite: {
		plugins: [tailwindcss()],
	},

	output: "static",
	adapter: netlify(),
});
