
function diffArray(array1, array2) {
  return array1.filter(x => !array2.includes(x))
    .concat(array2.filter(x => !array1.includes(x)));
}

export {
  diffArray,
};
