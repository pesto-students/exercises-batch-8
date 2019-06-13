
function objectInvert(inputObject) {
  const invertedObject = Object.assign(...Object.entries(inputObject)
    .map(([k, v]) => ({
      [v]: k,
    })));
  return invertedObject;
}

export {
  objectInvert,
};
