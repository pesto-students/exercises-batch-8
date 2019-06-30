
function objectInvert(object) {
  const result = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[object[key]] = key;
    }
  }
  return result;
}

export {
  objectInvert,
};
