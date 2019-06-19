
function xprod(firstArray, secondArray) {
  const modified = firstArray.map((elemFirst) => {
    const replacerArray = secondArray.map(elemSecond => [elemFirst, elemSecond]);
    return replacerArray;
  });

  const flattened = modified.flat();

  return flattened;
}

export {
  xprod,
};
