
function joinArrays(...arrays) {
  return arrays.reduce((acc, array) => acc.concat(array), []);
}

export {
  joinArrays,
};
