
function objectDefaults(object, defaultObject) {
  return Object.keys(defaultObject).reduce((acc, key) => {
    if (object[key]) {
      return acc;
    }
    acc[key] = defaultObject[key];
    return acc;
  }, object);
}

export {
  objectDefaults,
};
