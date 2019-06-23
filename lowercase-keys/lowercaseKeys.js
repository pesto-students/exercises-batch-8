
function lowercaseKeys(obj) {
  const objWithLowerCaseKeys = {};

  const keys = Object.keys(obj);
  keys.forEach((key) => {
    objWithLowerCaseKeys[key.toLowerCase()] = obj[key];
  });
  return objWithLowerCaseKeys;
}

export {
  lowercaseKeys,
};
