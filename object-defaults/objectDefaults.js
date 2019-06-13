const fillObject = (newObject, defaultObject) => {
  Object.keys(defaultObject)
    .forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      newObject[key] = newObject[key] || defaultObject[key];
    });
  return newObject;
};

function objectDefaults(object, defaultObject) {
  return fillObject(object, defaultObject);
}

export {
  objectDefaults,
};
