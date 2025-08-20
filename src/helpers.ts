export const isObject = (item: any) =>
  item !== null && typeof item === "object" && !Array.isArray(item);

export const isArray = (item: any) => item !== null && Array.isArray(item);

export const isPrimitive = (item: any) => {
  if (item === null || item === undefined) {
    return false;
  }
  const type = typeof item;
  return type === "string" || type === "number" || type === "boolean";
}

export function isValidJsonString(str: string): boolean {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
