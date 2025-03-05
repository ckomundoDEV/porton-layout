import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation } from "@/presentation/components/animations";
import {  Category } from "@/core/domain/entities/Product";
import { buttonVariants, featureVariants, productCardVariants } from "@/mocks/animations";
import { getCategoryColor } from "@/shared/constants/categories";
import { ProductSectionPresenterProps } from "@/interfaces/product";



export const ProductSectionPresenter = ({
  containerRef,
  productsContainerRef,
  productRefs,
  activeProduct,
  hoveredButton,
  selectedCategory,
  showQuotationForm,
  selectedProductId,
  filteredProducts,
  y,
  scale,
  opacity,
  setActiveProduct,
  setHoveredButton,
  setSelectedCategory,
  setShowQuotationForm,
  handleQuotationRequest,
}: ProductSectionPresenterProps) => {
  return (
    <section id="productos" className="section bg-gray-50 dark:bg-gray-900 overflow-hidden px-2 sm:px-0" ref={containerRef}>
      <motion.div 
        style={{ y, opacity, scale }}
        className="container-fluid px-4 sm:px-6 lg:px-8 relative mx-auto max-w-[2000px]"
      >
        <ScrollAnimation type="fadeInDown" duration={0.8} triggerOnce={false}>
          <div className="text-center mb-8 sm:mb-12 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 relative inline-block">
                Nuestros Portones de Alta Gama
                <motion.div 
                  className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 bg-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </h2>
            </motion.div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Diseñamos y fabricamos portones automáticos que combinan elegancia, seguridad y tecnología de 
              vanguardia para hogares exclusivos.
            </p>
          </div>
        </ScrollAnimation>

        {/* Navegación de categorías */}
        <div className="mb-10 md:mb-16 relative">
          <div className="flex flex-wrap justify-center items-center border-b border-gray-200 dark:border-gray-700 relative">
            {["todos", "madera", "metal", "electrico"].map((category) => {
              const isActive = selectedCategory === category;
              const categoryColors = getCategoryColor(category as Category);
              
              return (
                <div key={category} className="relative">
                  <motion.button
                    className={`px-3 sm:px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-medium relative z-10 transition-colors ${
                      isActive 
                        ? categoryColors.text
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setSelectedCategory(category as Category)}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    
                    {isActive && (
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${categoryColors.bg}`}
                        layoutId="categoryIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grid de productos */}
        <div ref={productsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={`product-${product.id}`}
                ref={(el) => {
                  if (el) productRefs.current[index] = el;
                }}
                onMouseEnter={() => setActiveProduct(product.id)}
                onMouseLeave={() => setActiveProduct(null)}
                custom={index}
                variants={productCardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-elegant overflow-hidden transform-gpu transition-transform duration-300 flex flex-col h-full sm:max-w-md lg:max-w-sm 2xl:max-w-md mx-auto w-full"
              >
                {/* Contenido del producto */}
                <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden flex-shrink-0" style={{ zIndex: 10 }}>
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: activeProduct === product.id ? 1.05 : 1, 
                      filter: activeProduct === product.id ? "brightness(1.05)" : "brightness(1)", 
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }} 
                    className="w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </motion.div>
                  
                  {/* Etiquetas y overlays */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className={`absolute top-2 sm:top-4 right-2 sm:right-4 py-0.5 sm:py-1 px-2 sm:px-3 rounded-full text-[10px] sm:text-xs font-bold uppercase ${getCategoryColor(product.category).bg} text-white`}
                  >
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: activeProduct === product.id ? 0.3 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  />
                  
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ 
                      x: activeProduct === product.id ? 0 : -30,
                      opacity: activeProduct === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
                    className={`absolute top-2 sm:top-4 left-0 py-1 px-2 sm:px-4 rounded-r-md text-sm sm:text-base font-bold text-white ${getCategoryColor(product.category).bg}`}
                  >
                    {product.price}
                  </motion.div>
                </div>
                
                {/* Información del producto */}
                <div className="p-4 sm:p-6 md:p-8 relative z-10 flex-grow flex flex-col justify-between">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + (Math.min(index, 5) * 0.05) }}
                  >
                    {product.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + (Math.min(index, 5) * 0.05) }}
                  >
                    {product.description}
                  </motion.p>
                  
                  {/* Características */}
                  <motion.div 
                    className="mb-4 sm:mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 + (Math.min(index, 5) * 0.05) }}
                    key={`features-${product.id}`}
                  >
                    <h4 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                      Características:
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start text-xs sm:text-sm md:text-base"
                          variants={featureVariants}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary mr-1 sm:mr-2 flex-shrink-0 mt-0.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {/* Precio y botón */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto pt-4 sm:pt-6 gap-3 sm:gap-0">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-primary text-center sm:text-left">
                      {product.price}
                    </span>
                    <motion.button
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      onMouseEnter={() => setHoveredButton(product.id)}
                      onMouseLeave={() => setHoveredButton(null)}
                      onClick={() => handleQuotationRequest(product.id)}
                      className={`btn-primary !py-2 sm:!py-3 !px-4 sm:!px-6 text-sm sm:text-base relative overflow-hidden w-full sm:w-auto text-center`}
                    >
                      <motion.span 
                        className="relative z-10 whitespace-nowrap"
                        animate={{ x: hoveredButton === product.id ? [0, -4, 0] : 0 }}
                        transition={{ duration: 0.3, repeat: hoveredButton === product.id ? Infinity : 0, repeatDelay: 1 }}
                      >
                        Solicitar cotización
                      </motion.span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light opacity-0"
                        animate={{ opacity: hoveredButton === product.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Modal de cotización */}
      {showQuotationForm && selectedProductId && (
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setShowQuotationForm(false)}
          >
            {/* Contenido del modal */}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}; 