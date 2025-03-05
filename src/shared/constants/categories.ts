import { Category } from "@/core/domain/entities/Product";

type CategoryConfig = {
  name: string;
  bg: string;
  text: string;
};

export const categories: { id: Category; name: string }[] = [
  { id: "todos", name: "Todos" },
  { id: "madera", name: "Madera" },
  { id: "metal", name: "Metal" },
  { id: "electrico", name: "Eléctrico" }
];

export const getCategoryColor = (category: Category): CategoryConfig => {
  const colors: Record<Category, CategoryConfig> = {
    todos: {
      name: "Todos",
      bg: "bg-gray-500",
      text: "text-gray-500"
    },
    madera: {
      name: "Madera",
      bg: "bg-amber-600",
      text: "text-amber-600"
    },
    metal: {
      name: "Metal",
      bg: "bg-blue-600",
      text: "text-blue-600"
    },
    electrico: {
      name: "Eléctrico",
      bg: "bg-purple-600",
      text: "text-purple-600"
    }
  };
  
  return colors[category];
}; 