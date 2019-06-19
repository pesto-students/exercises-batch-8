
function valuesIn(obj) {
  const propertyValues = [];
  const { hasOwnProperty } = Object.prototype;
  const objPrototype = Object.getPrototypeOf(obj);

  for (const property in obj) {
    if (hasOwnProperty.call(obj, property)
        || hasOwnProperty.call(objPrototype, property)) {
      const value = obj[property];
      propertyValues.push(value);
    }
  }
  return propertyValues;
}

export {
  valuesIn,
};
