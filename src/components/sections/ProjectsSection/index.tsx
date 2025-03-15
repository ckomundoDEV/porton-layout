"use client";

import { useState, useEffect, useRef } from "react";
import { ImageCarousel } from "@/components/ui";
import { ScrollAnimation } from "@/components/animations";
import { projects } from "@/mocks/projects";
import { motion } from "framer-motion";
import { isElementPartiallyVisible } from "@/utils/scroll/scrollUtils";
import { Project } from "@/interfaces/project";

// Hook personalizado para el manejo de imágenes precargadas
const useImagesPreloader = (activeProject: Project) => {
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
  
  useEffect(() => {
    // Crear objeto para seguir el estado de carga de cada imagen
    const newImagesLoaded: {[key: string]: boolean} = {};
    
    // Precarga las imágenes del proyecto activo
    activeProject.images.forEach(image => {
      const img = new Image();
      img.src = image.url;
      newImagesLoaded[image.url] = false;
      
      img.onload = () => {
        setImagesLoaded(prev => ({
          ...prev,
          [image.url]: true
        }));
      };
    });
    
    setImagesLoaded(newImagesLoaded);
  }, [activeProject]);

  // Comprobar si todas las imágenes del proyecto activo están cargadas
  const allImagesLoaded = activeProject.images.every(img => imagesLoaded[img.url]);
  
  return { imagesLoaded, allImagesLoaded };
};

// Hook personalizado para detectar cuando un elemento está en vista
const useElementInView = (ref: React.RefObject<HTMLElement | null>) => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      setInView(isElementPartiallyVisible(ref.current));
    }
  };

  useEffect(() => {
    // Usar requestAnimationFrame para optimizar el rendimiento del evento scroll
    let ticking = false;
    
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", scrollHandler, { passive: true });
    // Comprobar inmediatamente después del renderizado
    handleScroll();
    
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return inView;
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Uso de hooks personalizados
  const inView = useElementInView(sectionRef);
  const { allImagesLoaded } = useImagesPreloader(activeProject);

  // Función para cambiar de proyecto con mejor UX
  const changeProject = (project: Project) => {
    if (project.id === activeProject.id) return;
    setActiveProject(project);
  };

  return (
    <section 
      className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-20 md:py-28 relative overflow-hidden" 
      id="proyectos"
      ref={sectionRef}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      
      <div className="container-custom">
        <ScrollAnimation type="fadeIn">
          <div className="section-header text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
              Proyectos Destacados
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-50 origin-center"></span>
            </h2>
            <p className="section-description mb-4 md:mb-6 max-w-2xl mx-auto text-base md:text-lg">
              Explora algunos de nuestros proyectos más recientes donde hemos implementado soluciones personalizadas 
              que combinan seguridad, estética y tecnología.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row gap-9 md:gap-10">
          {/* Panel de navegación de proyectos - Diseño mejorado */}
          <ScrollAnimation 
            type="fadeInLeft" 
            className="w-full h-full lg:w-1/3"
          >
            <div className="bg-white dark:bg-gray-800 shadow-elegant rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="w-10 h-10 mr-3 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                Nuestros Proyectos
              </h3>
              
              <div className="space-y-4">
                {projects.map((project) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                    isActive={activeProject.id === project.id}
                    onClick={() => changeProject(project)}
                  />
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Detalle del proyecto - Diseño mejorado */}
          <ScrollAnimation 
            type="fadeInRight" 
            className="w-full h-full lg:w-2/3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-elegant border border-gray-100 dark:border-gray-700">
              {/* Carrusel de imágenes - Ahora con mejor presentación */}
              {(inView || allImagesLoaded) && (
                <div className="h-[350px]">
                  <ImageCarousel 
                    images={activeProject.images}
                    showControls={true}
                    showIndicators={true} 
                    autoPlayInterval={inView ? 5000 : 0}
                  />
                </div>
              )}

              <ProjectDetail project={activeProject} />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

// Componente para tarjeta de proyecto
const ProjectCard = ({ project, isActive, onClick }: { 
  project: Project; 
  isActive: boolean; 
  onClick: () => void;
}) => {
  return (
    <motion.div 
      className={`group rounded-xl overflow-hidden transition-all duration-300 cursor-pointer border ${
        isActive 
          ? "border-primary shadow-md dark:border-primary" 
          : "border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      role="button"
      aria-pressed={isActive ? "true" : "false"}
    >
      <div className={`p-4 md:p-5 ${
        isActive 
          ? "bg-gradient-to-r from-primary/90 to-primary-dark text-white" 
          : "bg-white dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-700"
      }`}>
        <div className="flex items-center">
          <div className="flex-1">
            <h4 className="font-bold text-base md:text-lg mb-1">{project.title}</h4>
            <p className={`text-xs md:text-sm ${
              isActive 
                ? "text-white/80" 
                : "text-gray-600 dark:text-gray-300"
            }`}>
              <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                isActive 
                  ? "bg-white/20" 
                  : "bg-primary/10 text-primary dark:bg-primary/20"
              }`}>
                {project.category}
              </span>
            </p>
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isActive 
              ? "bg-white/20" 
              : "bg-gray-100 dark:bg-gray-700"
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${
              isActive 
                ? "text-white" 
                : "text-primary"
            }`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Componente para detalles del proyecto
const ProjectDetail = ({ project }: { project: Project }) => {
  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mt-2 md:mt-0">
          {project.category}
        </span>
      </div>
      
      <p className="text-body mb-6 text-base md:text-lg leading-relaxed">
        {project.description}
      </p>

      {/* Características del proyecto - Con mejor diseño */}
      {project.features && (
        <div className="mt-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-5 border border-gray-100 dark:border-gray-700/50">
          <h4 className="font-bold text-lg mb-4 flex items-center text-gray-800 dark:text-white">
            <svg className="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Características
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {project.features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </div>
        </div>
      )}
      
      {/* Botón CTA */}
      <div className="mt-8 flex justify-end">
        <a href="#contacto" className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium transition-transform hover:scale-105">
          Solicitar información
          <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

// Componente para cada característica
const FeatureItem = ({ feature }: { feature: string }) => {
  return (
    <div className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex-shrink-0 mr-3">
        <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
          <svg className="w-4 h-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{feature}</span>
    </div>
  );
};

export default ProjectsSection; 