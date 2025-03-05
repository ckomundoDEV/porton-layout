"use client";

import { useState, useEffect, useRef } from "react";
import { ImageCarousel } from "@/components/ui";
import { ScrollAnimation } from "@/components/animations";
import { isElementInViewport } from "@/utils/scroll/scrollUtils";
import { combineGridStyles } from "@/constants/layout";
import { projects } from "@/mocks/projects";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      setInView(isElementInViewport(sectionRef.current));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Comprobar inmediatamente después del renderizado
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className="section bg-white dark:bg-gray-900 py-16 md:py-20" 
      id="proyectos"
      ref={sectionRef}
    >
      <div className="container-custom">
        <ScrollAnimation type="fadeIn">
          <div className="section-header">
            <h2 className="section-title">
              Proyectos Destacados
            </h2>
            <p className="section-description mb-8 md:mb-12 max-w-2xl mx-auto">
              Explora algunos de nuestros proyectos más recientes donde hemos implementado soluciones personalizadas que combinan seguridad, estética y tecnología.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-4 md:mt-8">
          {/* Panel de navegación de proyectos */}
          <ScrollAnimation 
            type="fadeInLeft" 
            className="w-full lg:w-1/3"
          >
            <div className="project-nav-container">
              <h3 className="text-lg md:text-xl font-bold mb-4">Nuestros Proyectos</h3>
              
              <div className="space-y-3 md:space-y-4">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className={`project-item ${
                      activeProject.id === project.id 
                        ? "project-item-active" 
                        : "project-item-inactive"
                    }`}
                    onClick={() => setActiveProject(project)}
                    role="button"
                    aria-pressed={activeProject.id === project.id ? "true" : "false"}
                  >
                    <h4 className="font-bold text-base md:text-lg">{project.title}</h4>
                    <p className={`text-xs md:text-sm mt-1 ${
                      activeProject.id === project.id 
                        ? "text-white/80" 
                        : "text-gray-600 dark:text-gray-300"
                    }`}>
                      {project.category}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Detalle del proyecto */}
          <ScrollAnimation 
            type="fadeInRight" 
            className="w-full lg:w-2/3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              {/* Carrusel de imágenes */}
              {(inView || activeProject.id === projects[0].id) && (
                <div className="h-[400px]">
                  <ImageCarousel 
                    images={activeProject.images}
                    showControls={true}
                    showIndicators={true} 
                  />
                </div>
              )}

              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{activeProject.title}</h3>
                <p className="text-body mb-4">
                  {activeProject.description}
                </p>

                {/* Características del proyecto */}
                {activeProject.features && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-3">Características:</h4>
                    <ul className={combineGridStyles(['responsive'], 'gap-1 md:gap-2')}>
                      {activeProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm md:text-base">
                          <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 