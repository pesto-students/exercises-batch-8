function objectKeys(object) {
  const keys = [];
  for (const key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      keys.push(key);
    }
  }
  return keys;
}

export {
  objectKeys,
};
