
function arrayAddition(array1, array2) {
  const instanceOfArray = array => array instanceof Array;
  if (array1.length === 0 || array2.length === 0) {
    throw new Error('Array is empty');
  }
  if (!instanceOfArray(array1) || !instanceOfArray(array2)) {
    throw new Error('Arguments must be array');
  }
  return 0;
}

export {
  arrayAddition,
};
