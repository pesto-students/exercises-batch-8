
function objectDefaults(obj, defaultObj) {
  const combinedObj = {
    ...defaultObj,
    ...obj,
  };
  return combinedObj;
}

export {
  objectDefaults,
};
