
function getIndexToIns(array, valueToBeInserted) {
  array.push(valueToBeInserted);
  array.sort((a, b) => a - b);
  return array.indexOf(valueToBeInserted);
}

export {
  getIndexToIns,
};
