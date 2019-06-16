
function lowercaseKeys(obj) {
  return Object.keys(obj).reduce((newObj, key) => {
    const tempObj = {
      ...newObj,
    };
    tempObj[key.toLowerCase()] = obj[key];
    return tempObj;
  }, {});
}

export {
  lowercaseKeys,
};
