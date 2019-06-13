function objectKeys(obj) {
  const resultArray = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      resultArray.push(key);
    }
  }
  return resultArray;
}

export {
  objectKeys,
};
