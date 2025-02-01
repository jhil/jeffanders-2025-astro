// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? "https://astro-shadcn-ui-template.vercel.app"
    : "http://localhost:4321",
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
