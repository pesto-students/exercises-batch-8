
function mapObject(obj, func) {
  const mappedObj = {};
  Object.keys(obj).forEach((key) => {
    mappedObj[key] = func(obj[key]);
  });
  return mappedObj;
}

export {
  mapObject,
};
