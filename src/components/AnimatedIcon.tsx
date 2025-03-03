"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedIconProps = {
  icon: ReactNode;
  text?: string;
  subtext?: string;
  color?: string;
  hoverColor?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

const AnimatedIcon = ({
  icon,
  text,
  subtext,
  color = "text-primary",
  hoverColor = "text-primary-dark",
  className = "",
  onClick,
  ariaLabel,
}: AnimatedIconProps) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-3 md:p-4 transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel}
    >
      <motion.div
        className={`mb-2 md:mb-3 ${color} hover:${hoverColor} transition-colors`}
        initial={{ rotate: 0 }}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      >
        {icon}
      </motion.div>
      
      {text && (
        <motion.h3 
          className="text-base md:text-lg font-semibold text-center text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {text}
        </motion.h3>
      )}
      
      {subtext && (
        <motion.p 
          className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {subtext}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AnimatedIcon; 