import { useState, useEffect } from "react";
import { Product } from "@/core/domain/entities/Product";
import { SITE_CONFIG } from "@/shared/constants";

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: Error | null;
  fetchProducts: () => Promise<void>;
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // En un caso real, aquí haríamos una llamada a la API
      // Por ahora, usamos los datos de ejemplo
      const productsData: Product[] = SITE_CONFIG.products.map((product, index) => ({
        id: index + 1,
        name: "papa",
        description: product.description,
        price: product.price.toString(),
        category: product.category === "residencial" ? "madera" : "metal",
        image: product.image,
        features: [...product.features],
        specifications: {
          material: "Acero inoxidable",
          dimensions: "4x3 metros",
          warranty: "55 años"
        }
      }));
      setProducts(productsData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Error al cargar los productos"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, fetchProducts };
}; 