
function objectKeys(object) {
  const keys = [];
  // eslint-disable-next-line guard-for-in
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

export {
  objectKeys,
};
