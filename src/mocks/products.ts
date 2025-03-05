export type Category = "madera" | "metal" | "electricos" | "todos";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  category: Category;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Portón Moderno Minimalista",
    description: "Diseño elegante con líneas limpias y minimalistas, ideal para hogares contemporáneos.",
    price: "Desde $55,000",
    features: [
      "Estructura de aluminio de alta resistencia",
      "Motor silencioso con apertura en 8 segundos",
      "Sensores de seguridad integrados",
      "Control remoto y app móvil",
      "Garantía de 5 años"
    ],
    image: "/images/WhatsApp-Image-2024-06-13-at-9.28.45-PM-2-1024x768.jpeg",
    category: "metal"
  },
  {
    id: 2,
    name: "Portón Premium Panorámico",
    description: "Diseño panorámico con paneles de vidrio templado y estructura metálica de alta gama.",
    price: "Desde $72,000",
    features: [
      "Vidrio templado de seguridad",
      "Estructura de acero inoxidable",
      "Sistema anticolisión avanzado",
      "Control por voz y huellas dactilares",
      "Garantía de 7 años"
    ],
    image: "/images/gran-puerta-corredera-automatica-control-remoto-concepto-seguridad-proteccion_641010-27462.jpg",
    category: "electricos"
  },
  {
    id: 3,
    name: "Portón Rústico de Madera",
    description: "Elegancia natural con madera tratada de la más alta calidad, ideal para residencias campestres.",
    price: "Desde $68,500",
    features: [
      "Madera de roble tratada",
      "Detalles artesanales",
      "Mecanismo silencioso",
      "Tratamiento anti-humedad y termitas",
      "Garantía de 8 años"
    ],
    image: "/images/WhatsApp-Image-2024-06-13-at-9.43.41-PM-4-1024x576.jpeg",
    category: "madera"
  },
  {
    id: 4,
    name: "Portón Smart Security",
    description: "La máxima seguridad con integración completa a sistemas inteligentes de hogar.",
    price: "Desde $85,000",
    features: [
      "Cámaras de seguridad integradas",
      "Reconocimiento facial",
      "Compatible con Google Home y Alexa",
      "Notificaciones en tiempo real",
      "Garantía de 10 años"
    ],
    image: "/images/WhatsApp-Image-2024-06-13-at-9.43.41-PM-4-1024x576.jpeg",
    category: "electricos"
  },
  {
    id: 5,
    name: "Portón Colonial de Madera",
    description: "Diseño clásico inspirado en la arquitectura colonial, con acabados artesanales.",
    price: "Desde $59,500",
    features: [
      "Madera maciza con acabado artesanal",
      "Herrajes decorativos forjados",
      "Adaptable a sistemas automáticos",
      "Tratamiento especial anti-insectos",
      "Garantía de 7 años"
    ],
    image: "/images/WhatsApp-Image-2024-06-13-at-9.28.45-PM-2-1024x768.jpeg",
    category: "madera"
  },
  {
    id: 6,
    name: "Portón Contemporáneo de Acero",
    description: "Diseño vanguardista con acero inoxidable y acabados minimalistas para residencias modernas.",
    price: "Desde $62,000",
    features: [
      "Acero inoxidable de alta resistencia",
      "Diseño personalizable",
      "Sistema de apertura silenciosa",
      "Resistente a condiciones climáticas extremas",
      "Garantía de 8 años"
    ],
    image: "/images/gran-puerta-corredera-automatica-control-remoto-concepto-seguridad-proteccion_641010-27462.jpg",
    category: "metal"
  },
  {
    id: 7,
    name: "Portón Biométrico Inteligente",
    description: "Sistema avanzado de portón con múltiples capas de seguridad y acceso biométrico.",
    price: "Desde $92,000",
    features: [
      "Reconocimiento facial y de huella",
      "Control desde smartphone",
      "Cámaras HD integradas",
      "Batería de respaldo",
      "Garantía de 10 años"
    ],
    image: "/images/WhatsApp-Image-2024-06-13-at-9.43.42-PM-2-1024x576.jpeg",
    category: "electricos"
  },
  {
    id: 8,
    name: "Portón Industrial Reforzado",
    description: "Solución robusta para entornos comerciales o residenciales que requieren máxima seguridad.",
    price: "Desde $78,000",
    features: [
      "Estructura de acero reforzado",
      "Motor de alta potencia",
      "Sistema anti-intrusión",
      "Soporta condiciones climáticas extremas",
      "Garantía de 15 años"
    ],
    image: "/images/WhatsApp-Image-2024-06-13-at-9.43.41-PM-4-1024x576.jpeg",
    category: "metal"
  },
  {
    id: 9,
    name: "Portón Balinés de Teca",
    description: "Portón exótico de madera de teca con tallados inspirados en la arquitectura balinesa.",
    price: "Desde $95,000",
    features: [
      "Madera de teca importada",
      "Tallados artesanales únicos",
      "Tratamiento anti-humedad premium",
      "Sistema de apertura manual o automática",
      "Garantía de 10 años"
    ],
    image: "/images/WhatsApp-Image-2024-06-13-at-9.28.45-PM-2-1024x768.jpeg",
    category: "madera"
  }
]; 