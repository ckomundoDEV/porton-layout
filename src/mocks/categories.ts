import { Category } from './products';

export type CategoryItem = {
  id: Category;
  name: string;
};

export const categories: CategoryItem[] = [
  { id: "todos", name: "Todos los Portones" },
  { id: "madera", name: "Portones de Madera" },
  { id: "metal", name: "Portones de Metal" },
  { id: "electrico", name: "Portones Eléctricos" }
];

export const getCategoryColor = (category: Category) => {
  switch(category) {
    case "madera": return {
      bg: "bg-amber-500",
      text: "text-amber-500",
      gradient: "from-amber-500/30 to-orange-500/30 dark:from-amber-900/30 dark:to-orange-900/30"
    };
    case "metal": return {
      bg: "bg-blue-500",
      text: "text-blue-500",
      gradient: "from-blue-500/30 to-indigo-500/30 dark:from-blue-900/30 dark:to-indigo-900/30"
    };
    case "electrico": return {
      bg: "bg-emerald-500",
      text: "text-emerald-500",
      gradient: "from-emerald-500/30 to-cyan-500/30 dark:from-emerald-900/30 dark:to-cyan-900/30"
    };
    default: return {
      bg: "bg-primary",
      text: "text-primary",
      gradient: "from-gray-500/30 to-gray-600/30 dark:from-gray-800/30 dark:to-gray-700/30"
    };
  }
}; 