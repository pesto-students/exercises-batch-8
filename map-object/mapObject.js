
function mapObject(object, tranformer) {
  const result = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[key] = tranformer(object[key]);
    }
  }
  return result;
}

export {
  mapObject,
};
