import { defineCollection, z } from "astro:content";

const speeches = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().optional()
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    district: z.string(),
    status: z.enum(["Planning", "Ongoing", "Completed"])
  })
});

const gallery = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    caption: z.string().optional(),
    date: z.coerce.date().optional()
  })
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date().optional()
  })
});

export const collections = { speeches, projects, gallery, blog };
