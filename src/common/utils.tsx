export function getValueByKey(obj, key) {
  if (key in obj) {
    return obj[key];
  }

  for (const prop in obj) {
    if (typeof obj[prop] === "object") {
      const value = getValueByKey(obj[prop], key);
      if (value !== undefined) {
        return value;
      }
    }
  }

  return undefined;
}
