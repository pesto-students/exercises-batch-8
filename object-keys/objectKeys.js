
function objectKeys(obj) {
  const keyList = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keyList.push(key);
    }
  }
  return keyList;
}

export {
  objectKeys,
};
