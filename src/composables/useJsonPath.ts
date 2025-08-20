import { v4 as uuid } from "uuid";
import { isArray, isObject, isPrimitive } from "../helpers";
import type { PathRef } from "../model";

export function useJsonPath(sample: { [key: string]: any } | any[]): string {
  const pathRefs: PathRef[] = [];

  function addPathRef(
    key: string,
    value: any,
    refId?: string,
    parentId?: string
  ): void {
    const id = refId || uuid();
    const parentRef = parentId ? getPathRef(parentId) : null;
    const layer = parentId ? (parentRef?.layer || 0) + 1 : 0;
    const type = isArray(value) ? "array" : typeof value;
    const fullPath = generateFullPath(key, parentId);

    if (key !== "{key}" && value !== "value") {
      pathRefs.push({ id, key, value, type, parentId, layer, fullPath });
    }
  }

  function getPathRef(id: string): PathRef | null {
    const ref = pathRefs.find((ref) => ref.id === id) || null;
    // This was throwing an error, but returning null is safer for checks.
    return ref;
  }

  function getParent(id: string): PathRef | null {
    const child = getPathRef(id);
    if (!child) return null;
    return child.parentId ? getPathRef(child.parentId) : null;
  }

  function getFullPathTo(id: string): string {
    const ref = getPathRef(id);
    if (!ref) return '';

    const parentRef = getParent(id);

    // Handle root elements
    if (!parentRef) {
        if (/^\d+$/.test(ref.key)) {
            return `$[${ref.key}]`; // Root array element
        }
        return `$.${ref.key}`; // Root object property
    }

    // Handle nested elements
    const parentPath = parentRef.fullPath;
    if (isRefArray(parentRef)) {
      return `${parentPath}[${ref.key}]`;
    }
    return `${parentPath}.${ref.key}`;
  }

  function generateFullPath(key: string, parentId?: string): string {
    if (parentId) {
      const parentFullPath = getFullPathTo(parentId);
      if (isArrayById(parentId)) {
        return `${parentFullPath}[${key}]`;
      }
      return `${parentFullPath}.${key}`;
    }
    // If no parent, it's a root element. If key is numeric, it's an array path.
    if (/^\d+$/.test(key)) {
        return `$[${key}]`;
    }
    return `$.${key}`;
  }

  function isRefArray(ref: PathRef): boolean {
    return ref?.type === "array";
  }

  function isArrayById(id: string): boolean {
    return getPathRef(id)?.type === "array";
  }

  function populatePathRefs(data: any, parentId?: string) {
    if (isArray(data)) {
        data.forEach((item, index) => {
            const key = String(index);
            const id = uuid();
            addPathRef(key, item, id, parentId);
            if (isObject(item) || isArray(item)) {
                populatePathRefs(item, id);
            }
        });
    } else if (isObject(data)) {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            const id = uuid();
            addPathRef(key, value, id, parentId);
            if (isObject(value) || isArray(value)) {
                populatePathRefs(value, id);
            }
        });
    }
  }

  function getJsonPathString(sample: { [key: string]: any } | any[]) {
    pathRefs.length = 0; // Clear pathRefs for fresh processing
    populatePathRefs(sample);

    const conditions = pathRefs
      .filter((item) => isPrimitive(item.value))
      .map(({ fullPath, value }) => {
        const formattedValue = typeof value === 'string' ? `'${value}'` : String(value);
        return `${fullPath}==${formattedValue}`;
      })
      .join(" && ");

    if (!conditions) {
      return '$[?()]';
    }

    return `$[?(${conditions})]`;
  }

  return getJsonPathString(sample);
}
