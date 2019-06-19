
function valuesIn(object) {
  const childKeys = Object.keys(object);
  const parentKeys = Object.keys(Object.getPrototypeOf(object));
  return [...parentKeys, ...childKeys].reduce((acc, key) => [...acc, object[key]], []);
}

export {
  valuesIn,
};
