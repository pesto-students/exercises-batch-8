
function lowercaseKeys(object) {
  return Object.keys(object).reduce((result, key) => {
    const lowercaseKey = key.toLowerCase();
    result[lowercaseKey] = object[key];
    return result;
  }, {});
}

export {
  lowercaseKeys,
};
