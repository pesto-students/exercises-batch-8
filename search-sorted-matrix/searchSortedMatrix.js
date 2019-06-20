
function binarySearchBool(key, array) {
  if (array.length > 0) {
    const mid = parseInt(array.length / 2, 10);
    const valueAtMid = array[mid];

    if (key === valueAtMid) {
      return true;
    }
    if (key > valueAtMid) {
      const secondHalfOfArray = array.slice(mid + 1);
      return binarySearchBool(key, secondHalfOfArray);
    }
    const firstHalfOfArray = array.slice(0, mid);
    return binarySearchBool(key, firstHalfOfArray);
  }
  return false;
}


function searchSortedMatrix({ search, matrix }) {
  const flattenedMatrix = matrix.reduce((acc, row) => [...acc, ...row], []);
  const searchValue = binarySearchBool(search, flattenedMatrix);
  return searchValue;
}

export {
  searchSortedMatrix,
};
