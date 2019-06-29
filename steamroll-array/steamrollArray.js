
function steamrollArray(array) {
  const containsNoArray = array.every(element => !Array.isArray(element));
  if (containsNoArray) {
    return array;
  }

  return steamrollArray([].concat(...array));
}

export {
  steamrollArray,
};
