import { Variants } from 'framer-motion';

type AnimationType = 
  | "fadeIn" 
  | "fadeInDown" 
  | "fadeInUp" 
  | "fadeInLeft" 
  | "fadeInRight" 
  | "zoomIn" 
  | "zoomOut" 
  | "bounce"
  | "slideIn"
  | "slideOut";

/**
 * Obtiene las variantes de animación para Framer Motion
 * @param type - El tipo de animación
 * @returns Las variantes de animación
 */
export const getAnimationVariants = (type: AnimationType): Variants => {
  const variants: Record<AnimationType, Variants> = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    zoomOut: {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { opacity: 1, scale: 1 }
    },
    bounce: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10
        }
      }
    },
    slideIn: {
      hidden: { opacity: 0, x: -100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 20
        }
      }
    },
    slideOut: {
      hidden: { opacity: 0, x: 100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 20
        }
      }
    }
  };
  
  return variants[type];
}; 