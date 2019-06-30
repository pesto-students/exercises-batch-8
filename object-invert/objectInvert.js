
function objectInvert(object) {
  const invertedObject = {};

  for (const key of Object.keys(object)) {
    invertedObject[object[key]] = key;
  }

  return invertedObject;
}

export {
  objectInvert,
};
