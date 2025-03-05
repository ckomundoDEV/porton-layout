import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(50, 'El nombre no puede exceder los 50 caracteres')
    .regex(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/, 'El nombre solo puede contener letras y espacios'),
  
  email: z.string()
    .email('Ingresa un correo electrónico válido')
    .min(5, 'El correo debe tener al menos 5 caracteres')
    .max(100, 'El correo no puede exceder los 100 caracteres'),
  
  phone: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Ingresa un número de teléfono válido')
    .min(10, 'El teléfono debe tener al menos 10 dígitos')
    .max(15, 'El teléfono no puede exceder los 15 dígitos'),
  
  service: z.string()
    .min(2, 'Selecciona un servicio')
    .max(50, 'El servicio no puede exceder los 50 caracteres'),
  
  message: z.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(500, 'El mensaje no puede exceder los 500 caracteres'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>; 