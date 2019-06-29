
function largeOfFour(subArrays) {
  return subArrays.map(subArray => Math.max(...subArray));
}

export {
  largeOfFour,
};
