"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToTop } from '@/utils/scroll/scrollToTop';
import { FaArrowUp } from 'react-icons/fa';

/**
 * Props del componente ScrollToTopButton
 * @interface ScrollToTopButtonProps
 * @property {number} [threshold=300] - Posición de scroll a partir de la cual se muestra el botón
 * @property {ScrollBehavior} [behavior='smooth'] - Comportamiento del scroll
 * @property {string} [className=''] - Clases adicionales para el botón
 */
interface ScrollToTopButtonProps {
  threshold?: number;
  behavior?: ScrollBehavior;
  className?: string;
}

/**
 * Componente botón que aparece cuando se hace scroll hacia abajo y permite volver al inicio de la página
 * @param {ScrollToTopButtonProps} props - Propiedades del componente
 * @returns {JSX.Element | null} Botón para volver arriba
 */
const ScrollToTopButton = ({
  threshold = 300,
  behavior = 'smooth',
  className = '',
}: ScrollToTopButtonProps): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  // Controlar cuándo mostrar el botón basado en la posición del scroll
  useEffect(() => {
    const handleScroll = (): void => {
      setIsVisible(window.scrollY > threshold);
    };

    // Añadir event listener
    window.addEventListener('scroll', handleScroll);
    
    // Verificar posición inicial
    handleScroll();
    
    // Limpiar listener al desmontar
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  /**
   * Manejador del clic en el botón
   * @returns {void}
   */
  const handleClick = (): void => {
    scrollToTop(behavior);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleClick}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform ${className}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Volver arriba"
          data-testid="scroll-to-top-button"
        >
          <FaArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton; 