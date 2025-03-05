/**
 * Función para desplazar la página al inicio
 * @param behavior - Comportamiento del scroll ('auto' | 'smooth' | 'instant')
 */
export const scrollToTop = (behavior: ScrollBehavior = 'instant'): void => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior
    });
  }
}; 