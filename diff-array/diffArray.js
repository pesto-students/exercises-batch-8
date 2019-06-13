
function diffArray(array1, array2) {
  const array1UniqueValues = array1.filter(array1val => !array2.includes(array1val));
  const array2UniqueValues = array2.filter(array2val => !array1.includes(array2val));
  return array1UniqueValues.concat(array2UniqueValues);
}

export {
  diffArray,
};
