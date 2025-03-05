import { RefObject } from "react";

export const scrollToElement = (ref: RefObject<HTMLElement>, offset = 100) => {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
      const scrollPosition = window.scrollY + rect.top - offset;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  }
}; 