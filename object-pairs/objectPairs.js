
function objectPairs(object) {
  const resultArray = [];
  Object.keys(object).map((key) => {
    resultArray.push([key, object[key]]);
    return null;
  });
  return resultArray;
}

export {
  objectPairs,
};
