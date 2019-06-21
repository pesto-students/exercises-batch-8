
function lowercaseKeys(object) {
  const updatedObject = {};
  Object.keys(object).map((word) => {
    updatedObject[word.toLowerCase()] = object[word];
    return null;
  });
  return updatedObject;
}

export {
  lowercaseKeys,
};
