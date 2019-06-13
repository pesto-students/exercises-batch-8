
function objectInvert(object) {
  const invertedObject = {};
  Object.keys(object).map((key) => {
    invertedObject[object[key]] = key;
    return null;
  });
  return invertedObject;
}

export {
  objectInvert,
};
