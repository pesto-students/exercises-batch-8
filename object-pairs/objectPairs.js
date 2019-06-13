
function objectPairs(obj) {
  const resultArray = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      resultArray.push([key, obj[key]]);
    }
  }
  return resultArray;
}

export {
  objectPairs,
};
