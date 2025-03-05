export type FormData = {
  nombre: string;
  telefono: string;
  correo: string;
  mensaje: string;
};
export type FormErrors = {
  [key in keyof FormData]?: string;
};

