
function valuesIn(object) {
  const visibleProperties = Object.keys(object);
  const prototypalProperties = Object.keys(Object.getPrototypeOf(object));
  const allProperties = visibleProperties.concat(prototypalProperties);
  return allProperties.map(property => object[property]);
}
export {
  valuesIn,
};
