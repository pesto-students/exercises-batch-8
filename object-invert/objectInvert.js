
function objectInvert(obj) {
  return Object.keys(obj).reduce((invertedObj, key) => {
    /* eslint-disable-next-line */
    invertedObj[obj[key]] = key;
    return invertedObj;
  }, {});
}

export {
  objectInvert,
};
