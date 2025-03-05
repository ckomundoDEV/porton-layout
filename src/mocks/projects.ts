import { Project } from "@/interfaces/project";

export   const projects: Project[] = [
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
