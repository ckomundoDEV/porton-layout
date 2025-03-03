"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Inicialmente establecemos el tema en 'undefined' para evitar hidratación incorrecta
  const [theme, setTheme] = useState<Theme>("light");
  
  // Una vez montado, leemos el tema del localStorage o preferencias del sistema
  useEffect(() => {
    // Comprobar si hay preferencia guardada en localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    
    // Si hay tema guardado, usarlo
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } 
    // Si no hay tema guardado, usar preferencia de sistema
    else {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemPreference ? "dark" : "light");
      if (systemPreference) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);
  
  // Función para alternar entre temas
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      return newTheme;
    });
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
} 