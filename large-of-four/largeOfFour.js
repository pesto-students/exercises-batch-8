function largeOfFour(nestedArray) {
  return nestedArray.map(array => Math.max(...array));
}


export {
  largeOfFour,
};
