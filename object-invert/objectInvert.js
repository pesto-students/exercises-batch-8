
function objectInvert(obj) {
  const resultObject = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      resultObject[obj[key]] = key;
    }
  }
  return resultObject;
}

export {
  objectInvert,
};
