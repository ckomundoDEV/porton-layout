import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { Product, Category } from "../../domain/entities/Product";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Portón de Madera Clásico",
    description: "Portón de madera maciza con acabado elegante",
    price: "$2,500",
    image: "/images/products/wooden-gate-1.jpg",
    category: "madera",
    features: [
      "Madera de pino tratada",
      "Acabado barnizado",
      "Sistema de cierre automático"
    ],
    specifications: {
      material: "Madera de pino",
      dimensions: "2.4m x 1.8m",
      warranty: "5 años"
    }
  },
  // ... más productos mock
];

export class MockProductRepository implements ProductRepository {
  getAllProducts(): Product[] {
    return mockProducts;
  }

  getProductsByCategory(category: Category): Product[] {
    if (category === "todos") return mockProducts;
    return mockProducts.filter(product => product.category === category);
  }

  getProductById(id: number): Product | undefined {
    return mockProducts.find(product => product.id === id);
  }
} 