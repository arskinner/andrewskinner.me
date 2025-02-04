import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    showProjects: z.boolean().optional().default(false),
  }),
});

const investments = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    url: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    technology: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { work, projects, investments };
