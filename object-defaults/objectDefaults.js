
function objectDefaults(object, defaultObject) {
  return { ...defaultObject, ...object };
}

export {
  objectDefaults,
};
