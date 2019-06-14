
function lowercaseKeys(inputObject) {
  const lowerCaseKeysObject = Object.keys(inputObject)
    .reduce((acc, key) => ({ ...acc, [key.toLowerCase()]: inputObject[key] }), {});
  return lowerCaseKeysObject;
}

export {
  lowercaseKeys,
};
