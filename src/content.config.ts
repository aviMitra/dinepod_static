import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const stories=defineCollection({loader:glob({base:"./src/content/stories",pattern:"**/*.md"}),schema:z.object({title:z.string(),description:z.string(),date:z.coerce.date(),author:z.string().default("Dinepod"),cover:z.string().optional(),draft:z.boolean().default(false)})});
const chefs=defineCollection({loader:glob({base:"./src/content/chefs",pattern:"**/*.md"}),schema:z.object({name:z.string(),location:z.string(),specialty:z.string(),portrait:z.string().optional(),introduction:z.string()})});
const experiences=defineCollection({loader:glob({base:"./src/content/experiences",pattern:"**/*.md"}),schema:z.object({title:z.string(),category:z.string(),description:z.string(),image:z.string().optional()})});
export const collections={stories,chefs,experiences};
