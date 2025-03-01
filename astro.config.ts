// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: process.env.CI ? "https://jeffanders.co" : "http://localhost:4321",

	integrations: [
		react(),
		mdx(),
		icon(),
		robotsTxt(),
		partytown({
			// Adds dataLayer.push as a forwarding-event.
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},

	experimental: {
		responsiveImages: true,
	},

	output: "static",
	adapter: netlify({
		imageCDN: false,
	}),
});
