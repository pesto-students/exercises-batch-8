
function objectDefaults(obj, defaultObj) {
  const resultObject = { ...defaultObj };
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      resultObject[key] = obj[key];
    }
  }
  return resultObject;
}

export {
  objectDefaults,
};
