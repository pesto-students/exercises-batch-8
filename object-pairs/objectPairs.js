
function objectPairs(obj) {
  const keyValuePairsArray = [];
  const keyList = Object.keys(obj);

  keyList.forEach((key) => {
    const value = obj[key];
    keyValuePairsArray.push([key, value]);
  });
  return keyValuePairsArray;
}

export {
  objectPairs,
};
