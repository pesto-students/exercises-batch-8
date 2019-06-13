
function mapObject(inputObject, mappingFunction) {
  const mappedObject = Object.assign(...Object.entries(inputObject)
    .map(([k, v]) => ({
      [k]: mappingFunction(v) // eslint-disable-line comma-dangle
    })));
  return mappedObject;
}

export {
  mapObject,
};
