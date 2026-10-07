import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/posts" }),
  schema: z.object({
    date: z.coerce.date(),
    title_en: z.string().min(1), text_en: z.string().min(1),
    title_ar: z.string().min(1), text_ar: z.string().min(1),
    title_ku: z.string().min(1), text_ku: z.string().min(1),
  }),
});

export const collections = { news };