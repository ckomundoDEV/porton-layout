"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ANIMATION_CONFIG } from "@/mocks/animations";
import { ImageCarouselProps } from "@/interfaces/ui";

const ImageCarousel = ({
  images,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Memoizar función para mejor rendimiento
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleDotClick = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const handleImageError = (url: string) => {
    setImageErrors(prev => ({
      ...prev,
      [url]: true
    }));
    console.error(`Error al cargar la imagen: ${url}`);
  };

  // Limpiar el intervalo existente antes de configurar uno nuevo
  const clearAutoPlayInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Reiniciar el intervalo cuando cambian las dependencias
  const resetAutoPlayInterval = useCallback(() => {
    clearAutoPlayInterval();
    
    if (!isPaused && autoPlayInterval > 0) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
    }
  }, [isPaused, autoPlayInterval, handleNext, clearAutoPlayInterval]);

  // Reiniciar autoplay cuando cambian las props
  useEffect(() => {
    resetAutoPlayInterval();
    return clearAutoPlayInterval;
  }, [resetAutoPlayInterval, clearAutoPlayInterval]);

  // Reiniciar autoplay cuando cambia el currentIndex
  useEffect(() => {
    resetAutoPlayInterval();
  }, [currentIndex, resetAutoPlayInterval]);

  // Reiniciar el carrusel cuando cambian las imágenes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
    setImageErrors({});
  }, [images]);

  // Detener la reproducción automática cuando el componente se desmonta
  useEffect(() => {
    return clearAutoPlayInterval;
  }, [clearAutoPlayInterval]);

  // Atajos de teclado para navegación
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev]);

  // Variantes para animaciones
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  // Fallback para cuando no hay imágenes
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl">
        <p className="text-gray-500 dark:text-gray-400">No hay imágenes disponibles</p>
      </div>
    );
  }

  // Imagen actual con manejo de errores
  const currentImage = images[currentIndex];
  const imageUrl = imageErrors[currentImage.url] 
    ? "/images/image3.jpg" // Usar una imagen existente como fallback
    : currentImage.url;

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: ANIMATION_CONFIG.spring.stiffness, damping: ANIMATION_CONFIG.spring.damping },
            opacity: { duration: ANIMATION_CONFIG.duration / 3 },
          }}
          className="absolute w-full h-full"
        >
          <div className="relative w-full h-full">
            {/* Imagen con manejo de errores */}
            <img
              src={imageUrl}
              alt={currentImage.alt}
              className="w-full h-full object-cover"
              onError={() => handleImageError(currentImage.url)}
              loading="lazy"
            />
            
            {/* Overlay y contenido */}
            {(currentImage.title || currentImage.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                {currentImage.title && (
                  <motion.h3 
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: ANIMATION_CONFIG.delay }}
                  >
                    {currentImage.title}
                  </motion.h3>
                )}
                {currentImage.description && (
                  <motion.p 
                    className="text-sm text-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: ANIMATION_CONFIG.delay * 1.5 }}
                  >
                    {currentImage.description}
                  </motion.p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controles - solo mostrar si hay más de una imagen */}
      {showControls && images.length > 1 && (
        <>
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Imagen anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </motion.button>
          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Siguiente imagen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </motion.button>
        </>
      )}

      {/* Indicadores - solo mostrar si hay más de una imagen */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel; 