"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Diseño Personalizado",
    description: "Creamos portones que se adaptan perfectamente a la estética de tu hogar, con opciones de materiales y acabados de alta gama.",
    icon: "/icons/design.svg",
  },
  {
    id: 2,
    title: "Automatización Inteligente",
    description: "Nuestros sistemas de automatización permiten controlar tu portón desde cualquier dispositivo, con características de seguridad avanzadas.",
    icon: "/icons/smart.svg",
  },
  {
    id: 3,
    title: "Instalación Profesional",
    description: "Contamos con un equipo de técnicos certificados que garantizan una instalación impecable y un funcionamiento óptimo.",
    icon: "/icons/installation.svg",
  },
  {
    id: 4,
    title: "Mantenimiento Preventivo",
    description: "Ofrecemos planes de mantenimiento para asegurar que tu portón funcione perfectamente durante años, previniendo fallas y desgastes.",
    icon: "/icons/maintenance.svg",
  },
  {
    id: 5,
    title: "Garantía Extendida",
    description: "Todos nuestros productos incluyen garantía extendida y soporte técnico prioritario para tu tranquilidad.",
    icon: "/icons/warranty.svg",
  },
  {
    id: 6,
    title: "Seguridad Reforzada",
    description: "Implementamos sistemas de seguridad adicionales como reconocimiento facial, códigos temporales y alertas en tiempo real.",
    icon: "/icons/security.svg",
  },
];

const FeaturesSection = () => {
  // Crear componente de icono de placeholder para desarrollo
  const DummyIcon = () => (
    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    </div>
  );

  return (
    <section id="servicios" className="section bg-white dark:bg-gray-800">
      <div className="container-custom">
        <ScrollAnimation type="fadeInDown" duration={0.6}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ofrecemos soluciones completas para tu portón automático, desde el diseño hasta el mantenimiento, 
              con un enfoque en la calidad, seguridad y elegancia.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation 
              key={feature.id} 
              type="staggerCards" 
              duration={0.7} 
              delay={index * 0.1} 
              className="h-full"
            >
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg hover:shadow-lg transition-shadow h-full transform-gpu hover:-translate-y-1 hover:rotate-1 transition-all duration-300">
                <div className="mb-6">
                  {/* Usar imagen si existe, o icono dummy para desarrollo */}
                  {feature.icon ? (
                    <div className="relative w-16 h-16">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        fill
                        className="object-contain dark:invert"
                      />
                    </div>
                  ) : (
                    <DummyIcon />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation type="fadeInUp" duration={0.5} delay={0.3} className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-all hover:scale-105"
          >
            Solicitar servicio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FeaturesSection; 