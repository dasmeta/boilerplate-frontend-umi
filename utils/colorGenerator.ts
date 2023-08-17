// ColorGenerator.tsx

const generateColorWithOpacity = (color: string, opacity: number): string => {
  const hexColor = color.startsWith("#") ? color.substring(1) : color;
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
};

export default generateColorWithOpacity;
