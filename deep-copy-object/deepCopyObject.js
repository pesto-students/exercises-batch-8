
function deepCopyObject(objectToDeepClone) {
  return JSON.parse(JSON.stringify(objectToDeepClone))
}

export {
  deepCopyObject,
};
