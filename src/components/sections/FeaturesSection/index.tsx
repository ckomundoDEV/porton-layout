"use client";

import { features } from "@/mocks/feature";
import ScrollAnimation from "@/components/animations/ScrollAnimation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Importamos el tipo Feature desde interfaces
// Importamos los datos de características desde el archivo de mocks

const FeatureIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "shield":
      return (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-all duration-500 ease-out">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
        </div>
      );
    case "cog":
      return (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-all duration-500 ease-out">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
          </svg>
        </div>
      );
    case "design":
      return (
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-all duration-500 ease-out">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
          </svg>
        </div>
      );
    default:
      return null;
  }
};

const FeaturesSection = () => {
  const [ref] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollDirection("down");
      } else if (st < lastScrollTop) {
        setScrollDirection("up");
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <section 
      id="caracteristicas" 
      className="section py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden"
      ref={ref}
    >
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-transparent z-0"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-green-500/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-20 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
        
        <div className="section-header relative z-10 mb-16">
          <ScrollAnimation 
            type={scrollDirection === "up" ? "fadeInDown" : "fadeInUp"} 
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">
              Características Exclusivas
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Nuestras soluciones se destacan por su diseño innovador, tecnología de vanguardia y atención personalizada en cada detalle.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
          {features.map((feature) => (
            <ScrollAnimation
              key={feature.id}
              type={scrollDirection === "up" ? "fadeInRight" : "fadeInLeft"}
              duration={0.6}
              delay={feature.id * 0.1}
            >
              <div className="group h-full p-1 rounded-2xl bg-gradient-to-br from-transparent to-transparent hover:from-green-500/30 hover:to-teal-500/30 dark:hover:from-green-600/30 dark:hover:to-teal-600/30 transition-all duration-700">
                <div className="h-full p-8 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col">
                  <div className="flex items-start">
                    <FeatureIcon icon={feature.icon} />
                    <h3 className="text-2xl font-bold ml-4 mt-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-6 text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-700 ease-in-out"></div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation 
          type={scrollDirection === "up" ? "fadeInUp" : "fadeInDown"} 
          duration={0.7} 
          delay={0.5} 
          className="mt-20 text-center relative z-10"
        >
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <span>Conoce Todas las Ventajas</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FeaturesSection; 