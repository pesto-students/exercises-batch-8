
function objectKeys(suppliedObject) {
  const objectKeyList = [];

  for (const key in suppliedObject) {
    if ({}.hasOwnProperty.call(suppliedObject, key)) {
      objectKeyList.push(key);
    }
  }

  return objectKeyList;
}

export {
  objectKeys,
};
