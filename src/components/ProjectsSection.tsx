"use client";

import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ScrollAnimation from "./ScrollAnimation";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  images: {
    url: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  features?: string[];
};

const ProjectsSection = () => {
  // Datos de ejemplo para proyectos
  const projects: Project[] = [
    {
      id: "project-1",
      title: "Residencia Moderna Valle Real",
      description: "Portón automático de diseño minimalista con acabados en acero inoxidable y madera de teca para esta residencia exclusiva.",
      category: "Residencial",
      images: [
        {
          url: "/images/WhatsApp-Image-2024-06-13-at-9.28.46-PM.jpeg",
          alt: "Portón principal residencia moderna",
          title: "Portón Principal",
          description: "Diseño contemporáneo con líneas limpias"
        },
        {
          url: "/images/WhatsApp-Image-2024-06-13-at-9.28.45-PM-2-1024x768.jpeg",
          alt: "Vista lateral del portón",
          title: "Detalle Lateral",
          description: "Acabados en acero inoxidable cepillado"
        },
        {
          url: "/images/WhatsApp-Image-2024-06-13-at-9.28.44-PM-1.jpeg",
          alt: "Mecanismo automatizado",
          title: "Sistema Automatizado",
          description: "Motor silencioso con control remoto y app móvil"
        }
      ],
      features: [
        "Diseño personalizado",
        "Control desde smartphone",
        "Sistema anti-atrapamiento",
        "Sensor de movimiento",
        "Iluminación LED integrada"
      ]
    },
    {
      id: "project-2",
      title: "Condominio Puerta de Hierro",
      description: "Sistema de portones para acceso vehicular y peatonal con diseño elegante y robusto para este exclusivo condominio.",
      category: "Comercial",
      images: [
        {
          url: "/images/WhatsApp-Image-2024-06-13-at-9.43.41-PM-4-1024x576.jpeg",
          alt: "Entrada principal del condominio",
          title: "Entrada Principal",
          description: "Acceso vehicular dual con control de acceso"
        },
        {
          url: "/images/WhatsApp-Image-2024-06-13-at-9.43.42-PM-2-1024x576.jpeg",
          alt: "Portón peatonal",
          title: "Acceso Peatonal",
          description: "Con intercomunicador y reconocimiento facial"
        },
        {
          url: "/images/hq720.jpg",
          alt: "Vista nocturna",
          title: "Iluminación Nocturna",
          description: "Sistema de iluminación LED programable"
        }
      ],
      features: [
        "Control de acceso biométrico",
        "Cámaras de seguridad integradas",
        "Apertura remota para visitas",
        "Sistema de respaldo en caso de falla eléctrica",
        "Monitoreo 24/7"
      ]
    },
    {
      id: "project-3",
      title: "Centro Empresarial Torres Américas",
      description: "Sistema de acceso automatizado para estacionamiento con alta capacidad y diseño de vanguardia.",
      category: "Comercial",
      images: [
        {
          url: "/images/gran-puerta-corredera-automatica-control-remoto-concepto-seguridad-proteccion_641010-27462.jpg",
          alt: "Entrada estacionamiento corporativo",
          title: "Acceso Vehicular",
          description: "Sistema de alta capacidad para tráfico intenso"
        },
        {
          url: "/images/puertas-automaticas-para-fincas-.avif",
          alt: "Panel de control",
          title: "Sistema de Control",
          description: "Panel táctil para administradores"
        },
        {
          url: "/images/backround-image.avif",
          alt: "Barreras automatizadas",
          title: "Barreras Automatizadas",
          description: "Operación silenciosa y rápida"
        }
      ],
      features: [
        "Lectura automática de placas",
        "Tickets con código QR",
        "Integración con sistema de cobro",
        "Análisis de tráfico en tiempo real",
        "Mantenimiento predictivo"
      ]
    }
  ];

  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="section bg-white dark:bg-gray-900 py-16 md:py-20" id="proyectos">
      <div className="container-custom px-4 md:px-6">
        <ScrollAnimation type="fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            Explora algunos de nuestros proyectos más recientes donde hemos implementado soluciones personalizadas que combinan seguridad, estética y tecnología.
          </p>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-4 md:mt-8">
          {/* Panel de navegación de proyectos */}
          <ScrollAnimation 
            type="fadeInLeft" 
            className="w-full lg:w-1/3"
          >
            <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-xl h-full">
              <h3 className="text-lg md:text-xl font-bold mb-4">Nuestros Proyectos</h3>
              
              <div className="space-y-3 md:space-y-4">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className={`p-3 md:p-4 rounded-lg cursor-pointer transition-all ${
                      activeProject.id === project.id 
                        ? "bg-primary text-white" 
                        : "bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
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
              <div className="h-[250px] sm:h-[300px] md:h-[400px]">
                <ImageCarousel 
                  images={activeProject.images.map(img => ({
                    url: img.url,
                    alt: img.alt,
                    title: img.title,
                    description: img.description
                  }))}
                />
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{activeProject.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {activeProject.description}
                </p>
                
                {activeProject.features && (
                  <div className="mt-4 md:mt-6">
                    <h4 className="font-semibold mb-2 md:mb-3">Características:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
                      {activeProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm md:text-base">
                          <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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