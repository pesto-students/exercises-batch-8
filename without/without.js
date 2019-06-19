
function without(arr1, arr2) {
  return arr1.reduce((acc, val1) => acc.filter(val2 => !Object.is(val1, val2)), arr2);
}

export {
  without,
};
