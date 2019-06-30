
function objectPairs(object) {
  const modifiedArray = [];

  for (const key of Object.keys(object)) {
    modifiedArray.push([
      key.toString(),
      object[key],
    ]);
  }

  return modifiedArray;
}

export {
  objectPairs,
};
