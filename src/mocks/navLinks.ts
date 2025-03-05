/**
 * Mock de enlaces de navegación para la barra de navegación
 */

export type NavLink = {
  name: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { name: "Inicio", href: "/#inicio" },
  { name: "Productos", href: "/#productos" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Contacto", href: "/#contacto" },
]; 