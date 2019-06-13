
function objectInvert(obj) {
  const invertedObj = {};

  const keyList = Object.keys(obj);
  keyList.forEach((key) => {
    const value = obj[key].toString();
    invertedObj[value] = key;
  });
  return invertedObj;
}

export {
  objectInvert,
};
