export type Category = "madera" | "metal" | "electrico" | "todos";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: Category;
  features: string[];
  specifications: {
    material: string;
    dimensions: string;
    warranty: string;
  };
} 