import { Product, Category } from "../entities/Product";

export interface ProductRepository {
  getAllProducts(): Product[];
  getProductsByCategory(category: Category): Product[];
  getProductById(id: number): Product | undefined;
} 