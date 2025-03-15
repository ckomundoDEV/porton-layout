"use client";

import { LandingContainer } from "@/containers";
import { useEffect } from "react";

// Los metadatos estáticos ahora están en un archivo separado: app/metadata.ts

export default function Home() {
  // Efecto para asegurar que la página comience en la parte superior al cargar
  useEffect(() => {
    // Asegurar que el scroll esté en la parte superior
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingContainer 
      heroProps={{
        title: "Portones Automáticos de Alta Gama",
        subtitle: "Soluciones elegantes y seguras para hogares exclusivos, con diseño personalizado y tecnología de vanguardia.",
        ctaText: "Descubrir productos",
        ctaLink: "#productos",
        secondaryCtaText: "Solicitar cotización",
        secondaryCtaLink: "#contacto",
        imageUrl: "/images/backround-image.avif"
      }}
      servicesProps={{
        title: "Nuestros Servicios",
        subtitle: "Lo que ofrecemos",
        description: "Ofrecemos soluciones completas para la automatización y seguridad de accesos residenciales y comerciales.",
        services: [
          {
            icon: (
              <svg className="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            ),
            title: "Diseño Personalizado",
            description: "Creamos portones que se integran perfectamente con la arquitectura de tu propiedad.",
            color: "text-primary",
            hoverColor: "text-secondary",
            delay: 0.1,
            borderColor: "border-primary"
          },
          {
            icon: (
              <svg className="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            ),
            title: "Automatización Inteligente",
            description: "Tecnología de punta para controlar tus accesos desde cualquier dispositivo móvil.",
            color: "text-secondary",
            hoverColor: "text-primary",
            delay: 0.2,
            borderColor: "border-secondary"
          },
          {
            icon: (
              <svg className="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ),
            title: "Mantenimiento Premium",
            description: "Servicio de mantenimiento preventivo y correctivo con técnicos certificados.",
            color: "text-accent",
            hoverColor: "text-primary",
            delay: 0.3,
            borderColor: "border-accent"
          },
          {
            icon: (
              <svg className="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
            title: "Garantía Extendida",
            description: "Respaldo total con las mejores garantías del mercado en productos y servicios.",
            color: "text-green-600",
            hoverColor: "text-green-500",
            delay: 0.4,
            borderColor: "border-green-600"
          }
        ]
      }}
      parallaxProps={{
        bgImage: "/images/puertas-automaticas-para-fincas-.avif",
        title: "Transformamos la entrada de tu hogar con soluciones a medida",
        subtitle: "Tecnología y diseño",
        buttonText: "Solicita una cotización",
        buttonLink: "#contacto",
        overlayColor: "rgba(142, 68, 173, 0.5)"
      }}
      mapProps={{
        address: "Av. Siempre Viva 123, Springfield",
        coordinates: { lat: 19.4326, lng: -99.1332 }
      }}
    />
  );
}
