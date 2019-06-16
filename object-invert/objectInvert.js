
function objectInvert(object) {
  return Object.keys(object).reduce((result, key) => {
    // eslint-disable-next-line no-param-reassign
    result[object[key]] = key;
    return result;
  }, {});
}

export {
  objectInvert,
};
