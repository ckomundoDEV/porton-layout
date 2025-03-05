"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation } from "@/components/animations";
import { testimonials } from "@/mocks/testimonials";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [interval, setIntervalTime] = useState(8000); // Tiempo del intervalo
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const testimonialsRef = useRef<HTMLElement>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay con intervalo ajustable
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setTimeout(() => {
      nextTestimonial();
    }, interval);
    
    return () => clearTimeout(timer);
  }, [activeIndex, autoplay, interval]);

  // Agregar efecto para pausar/reanudar el carrusel basado en la posición de scroll
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      // Si el usuario está en el área de testimonios, ajustar el autoplay
      if (testimonialsRef.current) {
        const rect = testimonialsRef.current.getBoundingClientRect();
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        
        // Si está en vista principal, velocidad normal, si está parcialmente visible, más lento
        if (isInView) {
          const viewportPercentage = Math.min(
            (windowHeight - Math.max(0, rect.top)) / Math.min(windowHeight, rect.height),
            (rect.bottom) / Math.min(windowHeight, rect.height)
          );
          
          // Ajustar intervalo según visibilidad
          setAutoplay(true);
          setIntervalTime(viewportPercentage > 0.7 ? 5000 : 8000);
        } else {
          // Pausar cuando no es visible
          setAutoplay(false);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Check immediately
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Seguimiento de la posición del cursor
  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    setMousePosition({
      x: clientX - left,
      y: clientY - top
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  // Renderizar estrellas basado en la calificación
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 md:w-5 md:h-5 ${
          i < rating ? "text-accent" : "text-gray-300 dark:text-gray-600"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="section py-20 md:py-28 bg-gradient-warm relative overflow-hidden" id="testimonios">
      {/* Elementos decorativos de fondo */}
      <div className="absolute w-72 h-72 rounded-full bg-secondary/40 opacity-20 blur-3xl -top-10 -left-10 dark:bg-secondary/60"></div>
      <div className="absolute w-72 h-72 rounded-full bg-accent/40 opacity-20 blur-3xl -bottom-10 -right-10 dark:bg-accent/60"></div>
      <div className="absolute inset-0 bg-secondary/5 backdrop-blur-[2px] dark:bg-secondary/20"></div>
      
      <div className="container-custom px-4 md:px-6 relative z-10">
        <ScrollAnimation type="fadeIn">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm md:text-base font-semibold tracking-wider text-white bg-secondary px-4 py-1 rounded-full uppercase mb-3 cursor-spotlight hover-scale">
              Experiencias
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 dark:from-white dark:to-white/70">
              Lo Que Nuestros Clientes Dicen
            </h2>
            <p className="text-white/90 dark:text-white text-lg">
              La satisfacción de nuestros clientes es nuestra mayor recompensa. Conoce las experiencias de quienes ya confían en nosotros.
            </p>
          </div>
        </ScrollAnimation>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          onTouchStart={() => setAutoplay(false)}
          onTouchEnd={() => setAutoplay(true)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-white-ivory/90 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-elegant overflow-hidden border border-white/20 dark:border-gray-700/50 cursor-spotlight hover-glow"
              style={{
                backgroundImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 152, 0, 0.1), transparent)`
              }}
            >
              <div className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {testimonials[activeIndex].image && (
                    <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent shadow-elegant relative hover-rotate">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={`Foto de ${testimonials[activeIndex].name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Elemento decorativo */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent"></div>
                    </div>
                  )}
                  
                  <div>
                    <div className="flex mb-4 -ml-1">
                      {renderStars(testimonials[activeIndex].rating)}
                    </div>
                    
                    <blockquote className="text-base md:text-xl lg:text-2xl italic text-gray-700 dark:text-gray-200 mb-6 relative">
                      <svg className="absolute -top-4 -left-2 w-8 h-8 text-secondary/20 dark:text-secondary/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.028-.18.056-.29.084-.1.028-.19.056-.29.084v-4.923c.05-.036.11-.084.16-.14.14-.092.28-.184.42-.276.16-.096.33-.19.51-.28.18-.092.38-.172.6-.242.22-.074.44-.133.69-.176.26-.044.52-.064.81-.064.5 0 .94.056 1.34.168.38.112.73.28 1.02.504.29.224.52.496.71.816.18.32.31.674.37 1.068zm8 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.028-.18.056-.29.084-.1.028-.19.056-.29.084v-4.923c.05-.036.11-.084.16-.14.14-.092.28-.184.42-.276.16-.096.33-.19.51-.28.18-.092.38-.172.6-.242.22-.074.44-.133.69-.176.26-.044.52-.064.81-.064.5 0 .94.056 1.34.168.38.112.73.28 1.02.504.29.224.52.496.71.816.18.32.31.674.37 1.068"></path>
                      </svg>
                      <span className="relative z-10">&ldquo;{testimonials[activeIndex].content}&rdquo;</span>
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-base md:text-lg text-gray-800 dark:text-gray-100">
                          {testimonials[activeIndex].name}
                        </p>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                          {testimonials[activeIndex].position}
                          {testimonials[activeIndex].company && (
                            <>, {testimonials[activeIndex].company}</>
                          )}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <motion.button
                          onClick={prevTestimonial}
                          className="bg-white-cream dark:bg-gray-700 hover:bg-secondary hover:text-white text-gray-700 dark:text-white p-2 rounded-full shadow-sm transition-all hover-scale"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Testimonio anterior"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                          </svg>
                        </motion.button>
                        <motion.button
                          onClick={nextTestimonial}
                          className="bg-white-cream dark:bg-gray-700 hover:bg-secondary hover:text-white text-gray-700 dark:text-white p-2 rounded-full shadow-sm transition-all hover-scale"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Testimonio siguiente"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all hover-scale ${
                index === activeIndex
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 