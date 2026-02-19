// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://vytautas.dev",

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.includes("/draft/"),
		}),
	],
});
