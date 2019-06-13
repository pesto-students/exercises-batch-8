
function getIndexToIns(array, valueToInsert) {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0 && array[i] >= valueToInsert) { // case if valueToInsert is smallest
      return 0;
    } else if (array[i] < valueToInsert && valueToInsert <= array[i + 1]) { // case if valueToInsert is between two index
      return i + 1;
    } else if (i === array.length - 1 ) { // case if valueToInsert is largest
      return i + 1;
    }
  }
}

export {
  getIndexToIns,
};
