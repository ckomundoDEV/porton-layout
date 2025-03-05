import { Product } from '../entities/Product';

export interface IProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProductById(id: number): Promise<Product | null>;
  getCategories(): Promise<string[]>;
} 