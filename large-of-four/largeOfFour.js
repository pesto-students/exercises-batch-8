
function largeOfFour(arr) {
  return Math.max(...arr.map(subArr => Math.max(...subArr)));
}

export {
  largeOfFour,
};
