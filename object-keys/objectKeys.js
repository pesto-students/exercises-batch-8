
function objectKeys(object) {
  const result = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

export {
  objectKeys,
};
