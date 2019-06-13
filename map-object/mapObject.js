
function mapObject(obj, mapFn) {
  const resultObject = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const mappedProperty = mapFn(obj[key]);
      resultObject[key] = mappedProperty;
    }
  }
  return resultObject;
}

export {
  mapObject,
};
