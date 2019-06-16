
function largeOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr));
}

export {
  largeOfFour,
};
