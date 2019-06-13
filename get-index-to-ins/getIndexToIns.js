
function getIndexToIns(array, itemToInsert) {
  const sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (sortedArray[i] >= itemToInsert) {
      return i;
    }
  }
  return sortedArray.length;
}

export {
  getIndexToIns,
};
