import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: ({ image }) => z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()).optional(),
			img: image(),
			img_alt: z.string(),
			demowork: z.array(image()),
			demowork_alt: z.string()
		}),
	}),
};
