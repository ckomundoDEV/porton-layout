"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type HeroBannerProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl?: string;
};

const HeroBanner = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageUrl = "/images/WhatsApp-Image-2024-06-13-at-9.28.45-PM-2-1024x768.jpeg",
}: HeroBannerProps) => {
  // Efecto de texto con animación
  const [isVisible, setIsVisible] = useState(false);
  
  // Efecto de cursor
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Hacer el seguimiento del cursor más suave
  const springX = useSpring(mouseX, { stiffness: 500, damping: 150 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 150 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    
    setMousePosition({
      x: clientX - left,
      y: clientY - top
    });
  };
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animación para el título
  const titleLetters = title.split("");
  
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden cursor-spotlight"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor personalizado */}
      <motion.div 
        ref={cursorRef}
        className="hidden md:block absolute w-24 h-24 rounded-full pointer-events-none mix-blend-difference z-50"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.2)',
          opacity: 0.6,
        }}
      />

      {/* Fondo con imagen y efecto parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <Image
          src={imageUrl}
          alt="Portones de alta gama"
          fill
          priority
          className="object-cover brightness-75 dark:brightness-50"
          sizes="100vw"
        />
      </motion.div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 z-[2] opacity-40">
        <div className="absolute w-6 h-6 rounded-full bg-accent top-1/4 left-1/4 animate-pulse-soft"></div>
        <div className="absolute w-4 h-4 rounded-full bg-highlight top-1/3 right-1/3 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
        <div className="absolute w-8 h-8 rounded-full bg-primary bottom-1/4 right-1/4 animate-pulse-soft" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Contenido */}
      <div className="container-custom relative z-10 py-16 md:py-24 text-white">
        <div className="max-w-2xl">
          <div className="overflow-hidden mb-2">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block text-sm md:text-base font-semibold tracking-wider text-highlight uppercase border border-highlight py-1 px-3 rounded-full mb-4 hover-scale">
                Portones Automáticos Premium
              </span>
            </motion.div>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative dark-text-visible"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    y: isVisible ? 0 : 20 
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.05 * index,
                    ease: "easeOut" 
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              <motion.span 
                className="absolute -z-10 w-full h-full left-0 top-0 bg-gradient-warm opacity-40 blur-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.h1>
          </div>
          
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-100 dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a
              href={ctaLink}
              className="bg-gradient-warm shadow-elegant text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover-scale hover-glow group relative overflow-hidden"
              aria-label="Ver productos"
            >
              <span className="relative z-10">{ctaText}</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.4), transparent)`,
                  transformOrigin: '50% 50%'
                }}
              />
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 relative z-10"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </motion.svg>
            </a>
            
            {secondaryCtaText && secondaryCtaLink && (
              <a
                href={secondaryCtaLink}
                className="border-2 border-white/80 backdrop-blur-sm bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all hover:bg-white/20 hover-float hover-reveal flex items-center justify-center group"
                aria-label="Solicitar cotización"
              >
                <span>{secondaryCtaText}</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-0 h-5 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:ml-2 group-hover:opacity-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </motion.svg>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Overlay con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-black/50 to-secondary/50 dark:from-primary/60 dark:via-black/70 dark:to-secondary/60 z-[1]"></div>
      
      {/* Scroll indicator con diseño mejorado */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hover-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          delay: 1.5,
        }}
      >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner; 