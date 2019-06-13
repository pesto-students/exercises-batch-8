
function objectKeys(object) {
  const keyArray = [];
  // eslint-disable-next-line guard-for-in
  for (const key in object) {
    keyArray.push(key);
  }
  return keyArray;
}

export {
  objectKeys,
};
