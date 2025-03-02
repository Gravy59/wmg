import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const games = defineCollection({
  loader: glob({ base: "./src/content/games", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    status: z.enum([
      "not started",
      "stuck",
      "early access",
      "available",
      "abandoned",
    ]),
    author: z.enum(["weible", "gravy59"]),
  }),
});

export const collections = { games };
