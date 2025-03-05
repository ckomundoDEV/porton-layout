import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ANIMATION_CONFIG } from "@/mocks/animations";

export const FadeInScale = ({ 
  children, 
  duration = ANIMATION_CONFIG.duration, 
  stiffness = ANIMATION_CONFIG.spring.stiffness 
}: { 
  children: ReactNode; 
  duration?: number; 
  stiffness?: number 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, type: "spring", stiffness }}
  >
    {children}
  </motion.div>
); 