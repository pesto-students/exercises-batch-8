
function binarySearchForRowNumber(search, matrix, lowerBound, higherBound) {
  const midRow = Math.floor((lowerBound + higherBound) / 2);
  if (midRow === lowerBound || midRow === higherBound) {
    return midRow;
  }
  if (search === matrix[midRow][0]) {
    return midRow;
  }
  if (search < matrix[midRow][0]) {
    return binarySearchForRowNumber(search, matrix, lowerBound, midRow - 1);
  }
  return binarySearchForRowNumber(search, matrix, midRow, higherBound);
}

function searchForNumber(search, matrix, rowNumber, lowerBound, higherBound) {
  const mid = Math.floor((lowerBound + higherBound) / 2);
  if (lowerBound === higherBound && matrix[rowNumber][mid] !== search) {
    return false;
  }
  if (matrix[rowNumber][mid] === search) {
    return true;
  }
  if (matrix[rowNumber][mid] > search) {
    return searchForNumber(search, matrix, rowNumber, lowerBound, mid - 1);
  }
  return searchForNumber(search, matrix, rowNumber, mid + 1, higherBound);
}

function searchSortedMatrix({ search, matrix }) {
  const rowNumber = binarySearchForRowNumber(search, matrix, 0, matrix.length - 1);
  return searchForNumber(search, matrix, rowNumber, 0, matrix[rowNumber].length - 1);
}

export {
  searchSortedMatrix,
};
