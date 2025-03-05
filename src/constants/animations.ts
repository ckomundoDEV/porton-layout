export const SPRING_CONFIG = { stiffness: 50, damping: 20 };

export const BUTTON_VARIANTS = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10
    }
  },
  tap: { scale: 0.95 }
}; 