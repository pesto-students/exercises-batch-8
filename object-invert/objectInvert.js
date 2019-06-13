/* eslint-disable no-prototype-builtins */

function objectInvert(object) {
  const invertedObject = {};
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      invertedObject[object[key]] = key;
    }
  }
  return invertedObject;
}

export {
  objectInvert,
};
