export type GridLayoutType = {
  responsive: string;
  gaps: string;
  container: string;
};

export const GRID_LAYOUTS: GridLayoutType = {
  responsive: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",
  gaps: "gap-6 md:gap-8",
  container: "container-fluid px-4 sm:px-6 lg:px-8 relative mx-auto max-w-[2000px]"
};

/**
 * Combine grid layout styles for easier use
 * @param options - Array of keys from GRID_LAYOUTS to combine
 * @param additionalClasses - Optional additional classes to add
 * @returns Combined class string
 */
export const combineGridStyles = (
  options: (keyof GridLayoutType)[], 
  additionalClasses?: string
): string => {
  const classes = options.map(option => GRID_LAYOUTS[option]).join(' ');
  return additionalClasses ? `${classes} ${additionalClasses}` : classes;
}; 