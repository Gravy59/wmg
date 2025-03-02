// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://we-make-games.vercel.app/",
  integrations: [sitemap()],
  adapter: vercel(),
});