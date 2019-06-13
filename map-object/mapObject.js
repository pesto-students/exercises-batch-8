
function mapObject(inputObject, mappingFunction) {
  const mappedObject = Object.assign(...Object.entries(inputObject)
    .map(([k, v]) => ({
      [k]: mappingFunction(v),
    })));
  return mappedObject;
}

export {
  mapObject,
};
