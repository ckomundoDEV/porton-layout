export const SITE_CONFIG = {
  name: "Portones Automáticos",
  description: "Soluciones de seguridad y automatización para tu propiedad",
  address: "Av. Principal #123, Ciudad de México",
  phone: "+52 55 1234 5678",
  email: "contacto@portonesautomaticos.com",
  social: {
    facebook: "https://facebook.com/portonesautomaticos",
    instagram: "https://instagram.com/portonesautomaticos",
    whatsapp: "https://wa.me/555512345678",
  },
  services: [
    {
      id: "porton-automatico",
      name: "Portón Automático",
      description: "Instalación y venta de portones automáticos residenciales y comerciales",
    },
    {
      id: "porton-manual",
      name: "Portón Manual",
      description: "Instalación y venta de portones manuales de alta calidad",
    },
    {
      id: "reparacion",
      name: "Reparación",
      description: "Servicio de reparación y mantenimiento de portones",
    },
    {
      id: "mantenimiento",
      name: "Mantenimiento",
      description: "Mantenimiento preventivo y correctivo de portones",
    },
  ],
  products: [
    {
      id: "porton-residencial",
      name: "Portón Residencial Automático",
      description: "Portón automático ideal para casas y residencias",
      price: 15000,
      category: "residencial",
      image: "/images/products/porton-residencial.jpg",
      features: [
        "Control remoto incluido",
        "Sistema de seguridad anti-pinzamiento",
        "Motor silencioso",
        "Garantía de 2 años",
      ],
    },
    {
      id: "porton-comercial",
      name: "Portón Comercial Automático",
      description: "Portón automático para negocios y empresas",
      price: 25000,
      category: "comercial",
      image: "/images/products/porton-comercial.jpg",
      features: [
        "Control remoto y panel de acceso",
        "Sistema de seguridad avanzado",
        "Motor industrial",
        "Garantía de 3 años",
      ],
    },
  ],
} as const;

export const ANIMATION_CONFIG = {
  duration: 0.6,
  delay: 0.2,
  spring: {
    stiffness: 50,
    damping: 20,
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const COLORS = {
  primary: {
    DEFAULT: "#2563eb",
    dark: "#1d4ed8",
    light: "#60a5fa",
  },
  secondary: {
    DEFAULT: "#4f46e5",
    dark: "#4338ca",
    light: "#818cf8",
  },
  neutral: {
    light: "#f3f4f6",
    DEFAULT: "#e5e7eb",
    dark: "#d1d5db",
  },
} as const; 