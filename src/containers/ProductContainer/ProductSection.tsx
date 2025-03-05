"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatPrice } from "@/utils/format/formatUtils";
import { ScrollAnimation } from "@/components";
import { combineGridStyles } from "@/constants/layout";
import { Product } from "@/core/domain/entities/Product";
import { useProducts } from "@/hooks/useProducts";
import { scrollToElement } from "@/utils/scroll/scrollUtils";

const ProductSection = () => {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const productsContainerRef = useRef<HTMLDivElement>(null);

  const filteredProducts: Product[] = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const categories = Array.from(new Set(products.map(product => product.category)));

  // Desplazarse al contenedor de productos cuando cambia la categoría
  useEffect(() => {
    if (productsContainerRef.current) {
      // Usar un pequeño retraso para permitir que el DOM se actualice
      setTimeout(() => {
        scrollToElement("productos", 100);
      }, 100);
    }
  }, [selectedCategory]);

  return (
    <section id="productos" className="section bg-neutral-light dark:bg-gray-900">
      <div className="container-custom">
        <ScrollAnimation type="fadeInDown" duration={0.6}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Productos</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descubre nuestra selección de portones automáticos de alta gama, diseñados para brindar seguridad y elegancia a tu propiedad.
            </p>
          </div>
        </ScrollAnimation>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === ""
                ? "bg-primary text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div 
          className={combineGridStyles(['gaps'])}
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))',
            justifyContent: 'center',
            maxWidth: '1800px',
            margin: '0 auto'
          }}
          ref={productsContainerRef}
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product: Product, index: number) => (
              <motion.div
                key={`product-${product.id}-${selectedCategory}`}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-elegant overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 relative z-10 flex-grow flex flex-col justify-between">
                  <motion.h3 
                    className="text-2xl font-bold mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {product.name}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {product.description}
                  </motion.p>
                  <motion.div 
                    className="mb-6 sm:mb-4 md:mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold mb-3">Características:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <div className="flex items-center justify-between mt-auto pt-6 sm:pt-4 md:pt-6">
                    <motion.span 
                      className="text-xl font-bold text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {formatPrice(Number(product.price))}
                    </motion.span>
                    <motion.a
                      href="#contacto"
                      className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      Solicitar cotización
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 