// stringUtils.mjs
// makes first letter uppercase, kinda basic but works fine

export function upperFirst(str) {
  if (!str) return ""; // just in case
  const first = str.charAt(0).toUpperCase();
  const rest = str.slice(1);
  return first + rest;
}

// might add more later if i remember
