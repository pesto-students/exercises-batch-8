
function lowercaseKeys(obj) {
  const lowerCasedObject = {};
  Object.entries(obj).forEach(([key, value]) => {
    lowerCasedObject[key.toLowerCase()] = value;
  });

  return lowerCasedObject;
}

export {
  lowercaseKeys,
};
