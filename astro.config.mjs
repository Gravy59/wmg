// @ts-check
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://we-make-games.vercel.app/",
  integrations: [sitemap()],
  adapter: vercel(),
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
});
