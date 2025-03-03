"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type AnimationType = 
  | "fadeIn" 
  | "fadeInUp" 
  | "fadeInDown" 
  | "fadeInLeft" 
  | "fadeInRight" 
  | "zoomIn" 
  | "zoomOut" 
  | "flipX" 
  | "flipY" 
  | "bounce"
  | "staggerCards";

type ScrollAnimationProps = {
  children: ReactNode;
  type?: AnimationType;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  triggerOnce?: boolean;
  className?: string;
};

// Definimos variantes para cada tipo de animación con estados hidden y visible
const getAnimationVariants = (type: AnimationType) => {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 40 },
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
    flipX: {
      hidden: { opacity: 0, rotateX: 60 },
      visible: { opacity: 1, rotateX: 0 }
    },
    flipY: {
      hidden: { opacity: 0, rotateY: 60 },
      visible: { opacity: 1, rotateY: 0 }
    },
    bounce: {
      hidden: { opacity: 0, y: 40 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 14
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
    }
  };
  
  return variants[type];
};

const ScrollAnimation = ({
  children,
  type = "fadeInUp",
  duration = 0.4, // Duración más corta para animaciones más fluidas
  delay = 0,
  threshold = 0.2, // Umbral más alto para detectar antes el elemento
  once = false, // Animaciones siempre activas con el scroll
  triggerOnce = true, // Por defecto, las animaciones solo se activan una vez
  className = "",
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { 
    amount: threshold, 
    once: triggerOnce 
  });
  
  // Efecto para controlar la animación basado en visibilidad
  useEffect(() => {
    if (inView) {
      // Cuando el elemento está visible en el viewport, siempre mostrar
      controls.start("visible");
    } else {
      // Cuando el elemento no está en el viewport
      // Solo ocultar si no está configurado para mostrarse una sola vez
      if (!once) {
        controls.start("hidden");
      }
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getAnimationVariants(type)}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1.0] // Curva de ease cubic-bezier para movimiento más natural
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 