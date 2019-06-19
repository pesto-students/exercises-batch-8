function xprod(array1, array2) {
  if (array1.length === 0 || array2.length === 0) {
    return [];
  }
  const combinationOfArrays = [];
  array1.map((eleOfArr1) => {
    array2.map((eleOfArr2) => {
      combinationOfArrays.push([eleOfArr1, eleOfArr2]);
      return eleOfArr2;
    });
    return eleOfArr1;
  });
  return combinationOfArrays;
}

export { xprod };
