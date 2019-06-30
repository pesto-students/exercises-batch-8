/* eslint-disable no-prototype-builtins */
function values(object) {
  const objectValues = [];

  if (object.hasOwnProperty === false) {
    return [false];
  }

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      objectValues.push(object[key]);
    }
  }
  return objectValues;
  // return Object.values(object)     //direct method 
}

export {
  values,
};
