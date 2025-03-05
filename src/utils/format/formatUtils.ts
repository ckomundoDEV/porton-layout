/**
 * Formatea un precio con el símbolo de moneda
 * @param price - El precio a formatear
 * @returns El precio formateado con el símbolo de moneda
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(price);
};

/**
 * Formatea un número de teléfono al formato estándar de México
 * @param phone - El número de teléfono a formatear
 * @returns El número de teléfono formateado
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
  if (match) {
    return `+52 ${match[1]} ${match[2]} ${match[3]}`;
  }
  return phone;
};

/**
 * Formatea una fecha al formato largo en español
 * @param date - La fecha a formatear
 * @returns La fecha formateada
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

/**
 * Convierte un texto en un slug para URLs
 * @param text - El texto a convertir
 * @returns El slug generado
 */
export const formatSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}; 