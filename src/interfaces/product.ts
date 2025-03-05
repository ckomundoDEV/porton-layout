import { Category, Product } from "@/core/domain/entities/Product";
import { MotionValue } from "framer-motion";
import { RefObject } from "react";

export type ProductSectionPresenterProps = {
  containerRef: RefObject<HTMLElement | null>;
  productsContainerRef: RefObject<HTMLDivElement | null>;
  productRefs: RefObject<(HTMLDivElement | null)[]>;
  activeProduct: number | null;
  hoveredButton: number | null;
  selectedCategory: Category;
  showQuotationForm: boolean;
  selectedProductId: number | null;
  filteredProducts: Product[];
  y: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  setActiveProduct: (id: number | null) => void;
  setHoveredButton: (id: number | null) => void;
  setSelectedCategory: (category: Category) => void;
  setShowQuotationForm: (show: boolean) => void;
  handleQuotationRequest: (id: number) => void;
};