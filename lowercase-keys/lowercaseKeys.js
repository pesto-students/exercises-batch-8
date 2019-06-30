
function lowercaseKeys(object) {
  const result = {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[key.toLowerCase()] = object[key];
    }
  }
  return result;
}

export {
  lowercaseKeys,
};
