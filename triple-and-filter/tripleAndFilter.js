
function tripleAndFilter(arr) {
  return [arr.filter(val => val % 5 === 0).reduce((sum, val) => sum + (val * 3), 0)];
}

export {
  tripleAndFilter,
};
