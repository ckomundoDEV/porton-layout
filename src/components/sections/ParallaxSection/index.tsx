"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type ParallaxSectionProps = {
  bgImage: string;
  children: ReactNode;
  overlayColor?: string;
  speed?: number;
  height?: string;
  className?: string;
  mobileHeight?: string;
};

const ParallaxSection = ({
  bgImage,
  children,
  overlayColor = "rgba(0, 0, 0, 0.6)",
  speed = 0.5,
  height = "60vh",
  mobileHeight = "40vh",
  className = "",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return (
    <section 
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ height: "auto", minHeight: `clamp(${mobileHeight}, 50vw, ${height})` }}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
        style={{ 
          y: prefersReducedMotion ? 0 : y,
          backgroundImage: `url(${bgImage})`,
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: overlayColor }}
        aria-hidden="true"
      />
      
      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center justify-center py-10 md:py-16">
        <div className="container-custom px-4 md:px-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection; 