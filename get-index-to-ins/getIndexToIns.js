
function getIndexToIns(unsortedArray, valueToBeInserted) {
  const sortedArray = unsortedArray.sort((a, b) => a - b);
  let i = 0;
  while (i < sortedArray.length) {
    if (sortedArray[i] >= valueToBeInserted) {
      return i;
    }
    i += 1;
  }
  return i;
}

export {
  getIndexToIns,
};
