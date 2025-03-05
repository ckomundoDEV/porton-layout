import { z } from 'zod';

export const productFilterSchema = z.object({
  category: z.string().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  search: z.string().min(2).max(50).optional(),
});

export type ProductFilterData = z.infer<typeof productFilterSchema>;

export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(3).max(100),
  description: z.string().min(10).max(500),
  price: z.number().min(0),
  category: z.string().min(2).max(50),
  image: z.string().url(),
  features: z.array(z.string().min(2).max(200)),
});

export type ProductData = z.infer<typeof productSchema>; 