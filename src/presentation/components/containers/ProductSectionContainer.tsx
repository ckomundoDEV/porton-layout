import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import { Category } from "@/core/domain/entities/Product";
import { ProductRepository } from "@/core/domain/repositories/ProductRepository";
import { ProductSectionPresenter } from "../presenters/ProductSectionPresenter";

type ProductSectionContainerProps = {
  repository: ProductRepository;
};

export const ProductSectionContainer = ({ repository }: ProductSectionContainerProps) => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>("todos");
  const [showQuotationForm, setShowQuotationForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLElement>(null);
  const productsContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const filteredProducts = selectedCategory === "todos" 
    ? repository.getAllProducts()
    : repository.getProductsByCategory(selectedCategory);
  
  useEffect(() => {
    productRefs.current = productRefs.current.slice(0, filteredProducts.length);
    
    if (productsContainerRef.current) {
      const rect = productsContainerRef.current.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        const scrollPosition = window.scrollY + rect.top - 100;
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedCategory, filteredProducts.length]);
  
  const springConfig = { stiffness: 50, damping: 20 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]), springConfig);

  const handleQuotationRequest = (productId: number) => {
    setSelectedProductId(productId);
    setShowQuotationForm(true);
    const selectedProduct = repository.getProductById(productId);
    alert(`Solicitud de cotización para: ${selectedProduct?.name}\nPronto contactaremos contigo para darte más información sobre este producto.`);
  };

  return (
    <ProductSectionPresenter
      containerRef={containerRef}
      productsContainerRef={productsContainerRef}
      productRefs={productRefs}
      activeProduct={activeProduct}
      hoveredButton={hoveredButton}
      selectedCategory={selectedCategory}
      showQuotationForm={showQuotationForm}
      selectedProductId={selectedProductId}
      filteredProducts={filteredProducts}
      y={y}
      scale={scale}
      opacity={opacity}
      setActiveProduct={setActiveProduct}
      setHoveredButton={setHoveredButton}
      setSelectedCategory={setSelectedCategory}
      setShowQuotationForm={setShowQuotationForm}
      handleQuotationRequest={handleQuotationRequest}
    />
  );
}; 