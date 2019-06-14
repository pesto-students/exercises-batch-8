
function lowercaseKeys(obj) {
  const lowerCaseKeyedObject = {};
  Object.entries(obj).forEach(([key, value]) => {
    const lowerCaseKey = key.toString().toLowerCase();
    lowerCaseKeyedObject[lowerCaseKey] = value;
  });
  return lowerCaseKeyedObject;
}

export {
  lowercaseKeys,
};
