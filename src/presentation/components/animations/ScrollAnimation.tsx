"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AnimationType, getAnimationVariants } from "@/mocks/animations";

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

const ScrollAnimation = ({
  children,
  type = "fadeInUp",
  duration = 0.4,
  delay = 0,
  threshold = 0.2,
  once = false,
  triggerOnce = true,
  className = "",
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { 
    amount: threshold, 
    once: triggerOnce 
  });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
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
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 