
function joinArrays(...arrays) {
  return arrays.reduce((acc, array) => [...acc, ...array], []);
}

export {
  joinArrays,
};
