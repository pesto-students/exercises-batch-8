
function diffArray(array1, array2) {
  const resultArray = [];
  resultArray.concat(array1.filter(array1val => !array2.includes(array1val)));
  resultArray.concat(array2.filter(array2val => !array1.includes(array2val)));
  return resultArray;
}

export {
  diffArray,
};
