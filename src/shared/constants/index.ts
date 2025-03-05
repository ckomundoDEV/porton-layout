export const SITE_CONFIG = {
  name: 'PortonesLux',
  description: 'Portones Automáticos de Alta Gama',
  url: 'https://portoneslux.com',
  email: 'contacto@portoneslux.com',
  phone: '+52 (55) 1234-5678',
  address: 'Av. Principal #123, Colonia Centro, Ciudad de México, CP 12345',
  social: {
    facebook: 'https://facebook.com/portoneslux',
    instagram: 'https://instagram.com/portoneslux',
    whatsapp: 'https://wa.me/5512345678',
  },
};

export const ANIMATION_CONFIG = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3 }
  }
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const Z_INDEX = {
  header: 50,
  modal: 100,
  tooltip: 200,
  dropdown: 300,
}; 