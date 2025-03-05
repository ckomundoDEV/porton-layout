import { ReactNode } from "react";
import { AnimationType } from "@/mocks/animations";

/**
 * Propiedades para el componente de animación al hacer scroll
 */
export interface ScrollAnimationProps {
  /** Contenido a animar */
  children: ReactNode;
  
  /** Tipo de animación a aplicar */
  type?: AnimationType;
  
  /** Duración de la animación en segundos */
  duration?: number;
  
  /** Retraso antes de iniciar la animación en segundos */
  delay?: number;
  
  /** Umbral de visibilidad para activar la animación (0-1) */
  threshold?: number;
  
  /** Si la animación debe ejecutarse una sola vez */
  once?: boolean;
  
  /** Si la animación debe activarse solo una vez */
  triggerOnce?: boolean;
  
  /** Clases CSS adicionales */
  className?: string;
} 