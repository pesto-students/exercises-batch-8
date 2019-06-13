
function objectKeys(obj) {
  const keys = [];
  for (const key in obj) {
    if (Object.prototype.propertyIsEnumerable.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
}

export {
  objectKeys,
};
