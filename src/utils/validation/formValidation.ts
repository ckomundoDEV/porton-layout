/**
 * Valida si un email es válido
 * @param email - El email a validar
 * @returns true si el email es válido, false si no lo es
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida si un número de teléfono es válido
 * @param phone - El número de teléfono a validar
 * @returns true si el número es válido, false si no lo es
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};

/**
 * Valida si un mensaje es válido
 * @param message - El mensaje a validar
 * @param minLength - Longitud mínima del mensaje
 * @param maxLength - Longitud máxima del mensaje
 * @returns true si el mensaje es válido, false si no lo es
 */
export const isValidMessage = (
  message: string,
  minLength: number = 10,
  maxLength: number = 500
): boolean => {
  return message.length >= minLength && message.length <= maxLength;
};

/**
 * Valida si un nombre es válido
 * @param name - El nombre a validar
 * @param minLength - Longitud mínima del nombre
 * @param maxLength - Longitud máxima del nombre
 * @returns true si el nombre es válido, false si no lo es
 */
export const isValidName = (
  name: string,
  minLength: number = 3,
  maxLength: number = 50
): boolean => {
  const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/;
  return (
    nameRegex.test(name) &&
    name.length >= minLength &&
    name.length <= maxLength
  );
}; 