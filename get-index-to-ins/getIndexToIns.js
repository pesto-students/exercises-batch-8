function getIndexToIns(array, numberToInsert) {
  const sortedArray = array.sort((a, b) => a - b);

  for (const [index, number] of array.entries()) {
    if (number >= numberToInsert) {
      return index;
    }
  }

  return sortedArray.length;
}

export {
  getIndexToIns,
};
