function xprod(array1, array2) {
  const prodArray = [];
  for (const array1Value of array1) {
    for (const array2Value of array2) {
      prodArray.push([array1Value, array2Value]);
    }
  }
  return prodArray;
}

export { xprod };
