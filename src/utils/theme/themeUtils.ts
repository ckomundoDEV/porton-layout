type Theme = "light" | "dark" | "system";

/**
 * Verifica si el sistema está en modo oscuro
 * @returns true si el sistema está en modo oscuro, false si no lo está
 */
export const isSystemDarkMode = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

/**
 * Obtiene el tema actual del localStorage o del sistema
 * @returns El tema actual
 */
export const getCurrentTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem("theme") as Theme;
  if (savedTheme) return savedTheme;

  return isSystemDarkMode() ? "dark" : "light";
};

/**
 * Aplica el tema especificado al documento
 * @param theme - El tema a aplicar
 */
export const applyTheme = (theme: Theme): void => {
  if (typeof window === "undefined") return;

  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  if (theme === "system") {
    const systemTheme = isSystemDarkMode() ? "dark" : "light";
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }

  localStorage.setItem("theme", theme);
}; 