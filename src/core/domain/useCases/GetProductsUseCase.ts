import { IProductRepository } from '../repositories/IProductRepository';
import { Product } from '../entities/Product';

export class GetProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(category?: string): Promise<Product[]> {
    if (category) {
      return this.productRepository.getProductsByCategory(category);
    }
    return this.productRepository.getAllProducts();
  }
} 