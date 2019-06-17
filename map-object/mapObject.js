
function mapObject(object, updateFunction) {
  const objectCopy = { ...object };
  Object.keys(objectCopy).map((key) => {
    objectCopy[key] = updateFunction(objectCopy[key]);
    return null;
  });
  return objectCopy;
}

export {
  mapObject,
};
