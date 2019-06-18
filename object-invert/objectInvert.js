
function objectInvert(object) {
  const invertedObject = {};
  Object.keys(object).forEach((key) => {
    invertedObject[object[key]] = key;
  });
  return invertedObject;
}

export {
  objectInvert,
};
