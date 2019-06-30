
function objectPairs(object) {
  const result = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}

export {
  objectPairs,
};
