
function diffArray(firstArray, secondArray) {
  const differenceArray = firstArray
    .filter(ele => !secondArray.includes(ele))
    .concat(secondArray.filter(ele => !firstArray.includes(ele)));
  return differenceArray;
}

export {
  diffArray,
};
