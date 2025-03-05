import { IProductRepository } from '@/core/domain/repositories/IProductRepository';
import { Product } from '@/core/domain/entities/Product';

export class ProductRepository implements IProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: "Portón Automático Clásicoooooo",
      description: "Diseño elegante y funcional para residencias",
      price: "Desde $45,000",
      image: "/images/porton-clasico.avif",
      category: "metal",
      features: [
        "Control remoto",
        "Sensores de seguridad",
        "Sistema anti-pinzamiento"
      ],
      specifications: {
        material: "Acero inoxidable",
        dimensions: "4x3 metros",
        warranty: "5 años"
      }
    },
    // ... otros productos
  ];

  async getAllProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.products.filter(product => product.category === category);
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.products.find(product => product.id === id) || null;
  }

  async getCategories(): Promise<string[]> {
    return [...new Set(this.products.map(product => product.category))];
  }
} 