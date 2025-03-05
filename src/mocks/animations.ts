import { Variants } from 'framer-motion';

// Tipos de animación
export type AnimationType = 
  | "fadeIn" 
  | "fadeInDown" 
  | "fadeInUp" 
  | "fadeInLeft" 
  | "fadeInRight" 
  | "zoomIn" 
  | "zoomOut" 
  | "bounce"
  | "slideIn"
  | "slideOut"
  | "staggerCards"
  | "flipX"
  | "flipY";

// Configuración base de animaciones
export const ANIMATION_CONFIG = {
  duration: 0.6,
  delay: 0.2,
  spring: {
    stiffness: 50,
    damping: 20,
  },
} as const;

// Variantes de botón
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10
    }
  },
  tap: { scale: 0.95 }
};

// Variantes de características
export const featureVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + (index * 0.1)
    }
  })
};

// Variantes de tarjetas de productos
export const productCardVariants: Variants = {
  initial: (index: number) => ({
    opacity: 0,
    y: 30, 
    scale: 0.98,
    transition: {
      delay: Math.min(index * 0.1, 0.5),
    }
  }),
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: Math.min(index * 0.05, 0.3)
    }
  }),
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  exit: (index: number) => ({
    opacity: 0,
    scale: 0.9,
    y: 30,
    transition: {
      duration: 0.3,
      delay: Math.min(index * 0.03, 0.2)
    }
  })
};

// Función para obtener variantes de animación
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
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1 }
    },
    zoomOut: {
      hidden: { opacity: 0, scale: 1.15 },
      visible: { opacity: 1, scale: 1 }
    },
    bounce: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 14
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
    },
    staggerCards: {
      hidden: { 
        opacity: 0, 
        scale: 0.9,
        rotateY: 15,
        perspective: 1000
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        rotateY: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }
    },
    flipX: {
      hidden: { opacity: 0, rotateX: 60 },
      visible: { opacity: 1, rotateX: 0 }
    },
    flipY: {
      hidden: { opacity: 0, rotateY: 60 },
      visible: { opacity: 1, rotateY: 0 }
    }
  };
  
  return variants[type];
}; 