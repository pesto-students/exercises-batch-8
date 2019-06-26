
function doesEndWith(endsWith, stringOrArray) {
  const lastElements = stringOrArray
    .slice(stringOrArray.length - endsWith.length, stringOrArray.length);
  if (Array.isArray(stringOrArray)) {
    const stringifiedLastElements = lastElements.toString();
    const stringifiedEndsWith = endsWith.toString();
    return stringifiedLastElements === stringifiedEndsWith;
  }
  return lastElements === endsWith;
}

export {
  doesEndWith,
};
