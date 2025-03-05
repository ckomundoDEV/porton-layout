"use client";

import ScrollAnimation from "../animations/ScrollAnimation";

// Definición del tipo Feature
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Datos de ejemplo para características
const features: Feature[] = [
  {
    id: 1,
    title: "Seguridad Avanzada",
    description: "Implementamos sistemas de seguridad de última generación con control de acceso biométrico, códigos digitales y monitoreo remoto desde tu smartphone.",
    icon: "shield"
  },
  {
    id: 2,
    title: "Automatización Inteligente",
    description: "Nuestros sistemas se integran con el resto de tu hogar inteligente, permitiendo programación horaria, control por voz y escenarios personalizados.",
    icon: "cog"
  },
  {
    id: 3,
    title: "Diseño a Medida",
    description: "Creamos portones que combinan funcionalidad y estética, con materiales de primera calidad y acabados personalizados que realzan la arquitectura de tu propiedad.",
    icon: "design"
  },
  {
    id: 4,
    title: "Instalación Profesional",
    description: "Nuestro equipo de técnicos certificados garantiza una instalación perfecta, cumpliendo con todas las normativas de seguridad y construcción.",
    icon: "shield"
  },
  {
    id: 5,
    title: "Mantenimiento Preventivo",
    description: "Ofrecemos planes de mantenimiento para asegurar el funcionamiento óptimo y prolongar la vida útil de tus sistemas de acceso automatizado.",
    icon: "cog"
  },
  {
    id: 6,
    title: "Servicio Post-venta",
    description: "Respaldamos todos nuestros productos con garantía extendida y soporte técnico disponible 24/7 para resolver cualquier incidencia de forma inmediata.",
    icon: "design"
  }
];

const FeatureIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "shield":
      return (
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
        </div>
      );
    case "cog":
      return (
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
          </svg>
        </div>
      );
    case "design":
      return (
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
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
  return (
    <section id="servicios" className="section bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-description max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para la automatización y seguridad de accesos residenciales y comerciales,
            con tecnología de vanguardia y acabados personalizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <ScrollAnimation
              key={feature.id}
              type="fadeInUp"
              duration={0.5}
              delay={feature.id * 0.1}
            >
              <div className="feature-card">
                <FeatureIcon icon={feature.icon} />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-body">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation type="fadeInUp" duration={0.5} delay={0.3} className="mt-16 text-center">
          <a
            href="#contacto"
            className="btn btn-primary hover:scale-105"
          >
            Solicitar Información
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FeaturesSection; 