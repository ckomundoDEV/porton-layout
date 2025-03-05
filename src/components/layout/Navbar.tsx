"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "@/app/providers/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navLinks } from "@/mocks/navLinks";
import { scrollToTop } from "@/utils/scroll/scrollToTop";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Inicio");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Determinar sección activa basada en la posición de scroll
      const sections = navLinks.map(link => link.href.replace('/', '').replace('#', ''));
      
      // Si estamos en la parte superior o cerca, activar "Inicio"
      if (window.scrollY < 100) {
        setActiveLink("Inicio");
        return;
      }
      
      // Revisamos el resto de las secciones
      for (const section of sections.reverse()) {
        if (section === 'inicio') continue; // Ya verificamos el inicio arriba
        
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            const activeNavLink = navLinks.find(link => link.href.includes(section));
            if (activeNavLink) {
              setActiveLink(activeNavLink.name);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutamos handleScroll inmediatamente para establecer el enlace activo correcto
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm shadow-elegant py-2"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      ref={navRef}
    >
      <div className="container-custom mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover-scale">
          <div className="relative h-10 w-10">
            <Image 
              src="/logo.svg" 
              alt="Portones Automáticos Logo" 
              width={40} 
              height={40} 
              className="dark:invert"
            />
          </div>
          <span className="text-xl font-bold text-foreground dark:text-white transition-colors">PortonesLux</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`text-foreground/80 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors py-2 hover-reveal cursor-spotlight ${
                    activeLink === link.name ? "text-primary dark:text-primary font-medium" : ""
                  }`}
                  onClick={(e) => {
                    setActiveLink(link.name);
                    // Si es el enlace de inicio (/) y ya estamos en inicio, evitar la navegación y hacer scroll manual
                    if (link.href === "/" && window.location.pathname === "/" && !window.location.hash) {
                      e.preventDefault();
                      scrollToTop('smooth');
                    }
                  }}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                      layoutId="activeIndicator"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-spotlight hover-scale"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? (
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 text-yellow-300"
                whileHover={{ rotate: 15 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </motion.svg>
            ) : (
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 text-primary"
                whileHover={{ rotate: 15 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </motion.svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover-scale"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? (
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 text-yellow-300"
                whileTap={{ scale: 0.9, rotate: 15 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </motion.svg>
            ) : (
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 text-primary"
                whileTap={{ scale: 0.9, rotate: 15 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </motion.svg>
            )}
          </button>
          <motion.button
            onClick={toggleMenu}
            className="text-foreground dark:text-white p-2 hover-scale"
            aria-label="Menú"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-elegant py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col container-custom mx-auto">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navLinks.indexOf(link) * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 px-2 text-foreground/80 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-spotlight ${
                      activeLink === link.name ? "text-primary dark:text-primary bg-gray-50 dark:bg-gray-800 font-medium" : ""
                    }`}
                    onClick={(e) => {
                      setIsOpen(false);
                      setActiveLink(link.name);
                      // Si es el enlace de inicio (/) y ya estamos en inicio, evitar la navegación y hacer scroll manual
                      if (link.href === "/" && window.location.pathname === "/" && !window.location.hash) {
                        e.preventDefault();
                        scrollToTop('smooth');
                      }
                    }}
                  >
                    <div className="flex items-center">
                      {link.name}
                      {activeLink === link.name && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-2 text-primary"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </motion.span>
                      )}
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar; 