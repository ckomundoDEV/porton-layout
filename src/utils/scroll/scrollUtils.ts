/**
 * Hace scroll suave hasta el elemento especificado
 * @param elementId - El ID del elemento al que se quiere hacer scroll
 * @param offset - El offset en píxeles desde la parte superior
 */
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

/**
 * Hace scroll suave hasta la parte superior de la página
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Verifica si un elemento está visible en el viewport
 * @param element - El elemento a verificar
 * @returns true si el elemento está visible, false si no lo está
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Obtiene la posición actual del scroll
 * @returns La posición actual del scroll en píxeles
 */
export const getScrollPosition = (): number => {
  return window.pageYOffset || document.documentElement.scrollTop;
}; 