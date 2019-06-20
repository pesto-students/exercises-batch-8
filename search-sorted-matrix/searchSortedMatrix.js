
function searchSortedMatrix({ search, matrix }) {
  return matrix.some(array => array.some(value => value === search));
}

export {
  searchSortedMatrix,
};
