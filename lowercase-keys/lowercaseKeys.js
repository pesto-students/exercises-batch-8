
function lowercaseKeys(givenObject) {
  const modifiedObject = {};
  const objectKeys = Object.keys(givenObject);

  objectKeys.forEach((key) => {
    const lowerCasedKey = key.toLowerCase();
    modifiedObject[lowerCasedKey] = givenObject[key];
  });

  return modifiedObject;
}

export {
  lowercaseKeys,
};
