
function mapObject(obj, mappingFunction) {
  const mappedObj = {};
  const properties = Object.keys(obj);

  properties.forEach((property) => {
    mappedObj[property] = mappingFunction(obj[property]);
  });

  return mappedObj;
}

export {
  mapObject,
};
