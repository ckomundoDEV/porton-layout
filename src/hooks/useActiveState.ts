import { useState } from "react";

export const useActiveState = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return {
    activeItem,
    hoveredItem,
    setActiveItem,
    setHoveredItem,
    isActive: (id: number) => activeItem === id,
    isHovered: (id: number) => hoveredItem === id
  };
}; 