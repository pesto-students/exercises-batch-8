
function largeOfFour(arrOfArrays) {
  return arrOfArrays.map(array => Math.max(...array));
}

export {
  largeOfFour,
};
