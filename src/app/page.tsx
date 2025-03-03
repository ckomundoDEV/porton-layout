"use client";

import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ProductSection from "@/components/ProductSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MapLocation from "@/components/MapLocation";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScrollAnimation from "@/components/ScrollAnimation";
import AnimatedIcon from "@/components/AnimatedIcon";
import ParallaxSection from "@/components/ParallaxSection";
import { useEffect } from "react";

// Los metadatos estáticos ahora están en un archivo separado: app/metadata.ts

export default function Home() {
  // Efecto para asegurar que la página comience en la parte superior al cargar
  useEffect(() => {
    // Asegurar que el scroll esté en la parte superior
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      
      {/* Sección de inicio con ID específico para el scroll */}
      <div id="inicio">
      <HeroBanner 
        title="Portones Automáticos de Alta Gama" 
        subtitle="Soluciones elegantes y seguras para hogares exclusivos, con diseño personalizado y tecnología de vanguardia."
        ctaText="Descubrir productos"
        ctaLink="#productos"
        secondaryCtaText="Solicitar cotización"
        secondaryCtaLink="#contacto"
          imageUrl="/images/backround-image.avif"
        />
      </div>
      
      {/* Sección de servicios con diseño mejorado */}
      <section className="section py-20 md:py-28 relative overflow-hidden" id="servicios">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-neutral-light dark:bg-gray-900 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-1"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
        
        <div className="container-custom px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block text-sm md:text-base font-semibold tracking-wider text-primary uppercase mb-3">
                Lo que ofrecemos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Ofrecemos soluciones completas para la automatización y seguridad de accesos residenciales y comerciales.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ScrollAnimation type="fadeInUp" delay={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-elegant hover:shadow-bold transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full border-t-4 border-primary">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <AnimatedIcon 
                    icon={
                      <svg className="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    }
                    text="Diseño Personalizado"
                    subtext="Creamos portones que se integran perfectamente con la arquitectura de tu propiedad."
                    color="text-primary"
                    hoverColor="text-secondary"
                    ariaLabel="Servicio de diseño personalizado"
                    className="mb-2"
                  />
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a href="#contacto" className="inline-flex items-center text-primary hover:text-secondary text-sm font-medium">
                      <span>Conocer más</span>
                      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fadeInUp" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-elegant hover:shadow-bold transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full border-t-4 border-secondary">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <AnimatedIcon 
                    icon={
                      <svg className="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    }
                    text="Automatización"
                    subtext="Implementamos sistemas inteligentes para control remoto, acceso biométrico y más."
                    color="text-secondary"
                    hoverColor="text-primary"
                    ariaLabel="Servicio de automatización"
                    className="mb-2"
                  />
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a href="#contacto" className="inline-flex items-center text-secondary hover:text-primary text-sm font-medium">
                      <span>Conocer más</span>
                      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fadeInUp" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-elegant hover:shadow-bold transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full border-t-4 border-accent">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <AnimatedIcon 
                    icon={
                      <svg className="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    }
                    text="Seguridad Avanzada"
                    subtext="Protegemos tu hogar o negocio con los sistemas de seguridad más avanzados del mercado."
                    color="text-accent"
                    hoverColor="text-highlight"
                    ariaLabel="Servicio de seguridad avanzada"
                    className="mb-2"
                  />
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a href="#contacto" className="inline-flex items-center text-accent hover:text-highlight text-sm font-medium">
                      <span>Conocer más</span>
                      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fadeInUp" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-elegant hover:shadow-bold transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full border-t-4 border-highlight">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <AnimatedIcon 
                    icon={
                      <svg className="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                      </svg>
                    }
                    text="Mantenimiento"
                    subtext="Ofrecemos servicios de mantenimiento regular para garantizar el funcionamiento óptimo."
                    color="text-highlight"
                    hoverColor="text-accent"
                    ariaLabel="Servicio de mantenimiento"
                    className="mb-2"
                  />
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a href="#contacto" className="inline-flex items-center text-highlight hover:text-accent text-sm font-medium">
                      <span>Conocer más</span>
                      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      <ProductSection />
      
      <FeaturesSection />

      <ParallaxSection 
        bgImage="/images/puertas-automaticas-para-fincas-.avif" 
        height="60vh"
        speed={0.3}
        overlayColor="rgba(142, 68, 173, 0.7)"
      >
        <div className="text-center text-white px-4 md:px-0">
          <ScrollAnimation type="fadeInUp">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg">
              Calidad y Excelencia
            </h2>
            <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto">
              Nuestros portones combinan la más avanzada tecnología con un diseño excepcional
            </p>
            <a 
              href="#contacto" 
              className="inline-block bg-gradient-vibrant shadow-elegant hover:shadow-bold text-white font-semibold py-3 px-8 md:px-10 rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm"
              aria-label="Solicitar cotización"
            >
              Solicita tu cotización ahora
            </a>
          </ScrollAnimation>
        </div>
      </ParallaxSection>

      <ProjectsSection />
      
      <div className="relative" id="nosotros">
        <div className="section bg-neutral-light dark:bg-gray-900 py-16 md:py-28 relative overflow-hidden">
          {/* Formas decorativas */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/10 blur-2xl"></div>
          <div className="absolute top-1/3 -left-24 w-40 h-40 rounded-full bg-secondary/10 blur-2xl"></div>
          <div className="absolute -bottom-20 right-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl"></div>
        
          <div className="container-custom px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <ScrollAnimation type="fadeInLeft">
              <div>
                  <span className="inline-block text-sm md:text-base font-semibold tracking-wider text-secondary uppercase mb-2 md:mb-3">
                    Quiénes somos
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Acerca de PortonesLux</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
                  Desde 2008, nos hemos especializado en el diseño, fabricación e instalación de portones 
                  automáticos de la más alta calidad para residencias exclusivas en toda la región.
                </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
                  Nuestro equipo de expertos combina artesanía de primera con tecnología de vanguardia 
                  para crear soluciones que no solo mejoran la seguridad de tu hogar, sino que también 
                  elevan su estética y valor.
                </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 text-base md:text-lg">
                  Cada proyecto es único y personalizado según los requerimientos específicos de nuestros 
                  clientes, garantizando así un resultado que supera expectativas tanto en funcionalidad 
                  como en diseño.
                </p>
                  <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
                    <ScrollAnimation type="zoomIn" delay={0.1}>
                      <div className="flex flex-col items-center p-4 md:p-5 bg-white dark:bg-gray-800 rounded-xl shadow-elegant">
                        <span className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">15+</span>
                        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Años de experiencia</span>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation type="zoomIn" delay={0.2}>
                      <div className="flex flex-col items-center p-4 md:p-5 bg-white dark:bg-gray-800 rounded-xl shadow-elegant">
                        <span className="text-2xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">500+</span>
                        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Proyectos completados</span>
                  </div>
                    </ScrollAnimation>
                    <ScrollAnimation type="zoomIn" delay={0.3}>
                      <div className="flex flex-col items-center p-4 md:p-5 bg-white dark:bg-gray-800 rounded-xl shadow-elegant">
                        <span className="text-2xl md:text-4xl font-bold text-accent mb-1 md:mb-2">100%</span>
                        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Satisfacción garantizada</span>
                  </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation type="fadeInRight">
                <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-bold">
                <img 
                    src="/images/WhatsApp-Image-2024-06-13-at-9.43.41-PM-4-1024x576.jpeg" 
                    alt="Nuestro equipo de expertos trabajando en portones automáticos" 
                  className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 md:p-6 rounded-lg inline-block">
                      <p className="text-lg md:text-xl font-semibold text-primary dark:text-accent">
                        &ldquo;Transformamos accesos en experiencias&rdquo;
                      </p>
                    </div>
                  </div>
              </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      
      <TestimonialsSection />
      
      <ContactSection />

      <div className="section bg-neutral-light dark:bg-gray-900 py-16 md:py-20">
        <div className="container-custom px-4 md:px-6">
          <ScrollAnimation type="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Nuestra Ubicación</h2>
          </ScrollAnimation>
          <ScrollAnimation type="fadeInUp">
            <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-elegant">
            <MapLocation 
              address="Av. Principal #123, Colonia Centro, Ciudad de México, CP 12345"
              coordinates={{ lat: 19.432608, lng: -99.133209 }} // Coordenadas del Zócalo de CDMX como ejemplo
            />
          </div>
          </ScrollAnimation>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
