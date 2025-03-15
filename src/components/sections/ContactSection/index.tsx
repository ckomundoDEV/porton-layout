"use client";

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { ScrollAnimation } from "@/components/animations";
import { toast } from "react-hot-toast";
import { FormErrors, FormData } from "@/interfaces/contact";
import { scrollToElement } from "@/utils/scroll/scrollUtils";



const initialFormData: FormData = {
  nombre: "",
  telefono: "",
  correo: "",
  mensaje: "",
};


const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
      isValid = false;
    } else if (formData.nombre.length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
      isValid = false;
    }

    // Validar teléfono
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\D/g, ''))) {
      newErrors.telefono = "Ingresa un número de teléfono válido (10 dígitos)";
    }

    // Validar correo
    if (!formData.correo.trim()) {
      newErrors.correo = "El correo electrónico es obligatorio";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.correo)) {
      newErrors.correo = "Ingresa un correo electrónico válido";
      isValid = false;
    }

    // Validar mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio";
      isValid = false;
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Limpiar error cuando el usuario escribe
    if (errors[name as keyof FormData]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Scroll al inicio del formulario para mostrar errores o mensaje de éxito
    if (formRef.current) {
      scrollToElement("contacto", 80);
    }
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulación de envío
    try {
      // Aquí iría la lógica de envío real al servidor
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Resetear el formulario con los nombres de campos correctos
      setFormData({
        nombre: "",
        telefono: "",
        correo: "",
        mensaje: ""
      });
      setIsSubmitted(true);
      toast.success("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.");
    } catch (err) {
      toast.error("Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.");
      console.error("Error al enviar formulario:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <ScrollAnimation type="fadeIn">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estamos aquí para responder a todas tus preguntas y ayudarte a encontrar la mejor solución para tu hogar o negocio.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Formulario */}
          <ScrollAnimation type="fadeInLeft">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm">
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200">
                  <p className="font-medium">¡Mensaje enviado correctamente!</p>
                  <p className="text-sm mt-1">Nos pondremos en contacto contigo a la brevedad.</p>
                </div>
              )}
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.nombre
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary"
                  } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.telefono
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary"
                  } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                  placeholder="Tu número de teléfono"
                />
                {errors.telefono && (
                  <p className="mt-1 text-sm text-red-500">{errors.telefono}</p>
                )}
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-medium mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.correo
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary"
                  } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                  placeholder="Tu correo electrónico"
                />
                {errors.correo && (
                  <p className="mt-1 text-sm text-red-500">{errors.correo}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.mensaje
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-primary"
                  } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2`}
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
                {errors.mensaje && (
                  <p className="mt-1 text-sm text-red-500">{errors.mensaje}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </form>
          </ScrollAnimation>

          {/* Información de contacto */}
          <ScrollAnimation type="fadeInRight">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-gray-600 dark:text-gray-300">Av. Principal #123, Colonia Centro, Ciudad de México, CP 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600 dark:text-gray-300">+52 (55) 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Correo electrónico</p>
                      <p className="text-gray-600 dark:text-gray-300">contacto@portoneslux.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Horario de atención</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 dark:text-gray-300">Sábados: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600 dark:text-gray-300">Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 