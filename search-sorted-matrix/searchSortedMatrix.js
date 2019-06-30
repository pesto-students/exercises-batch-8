function searchSortedMatrix({ search, matrix }) {
  return matrix.some(array => array.includes(search));
}

export {
  searchSortedMatrix,
};
