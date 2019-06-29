
function largeOfFour(arrayOfNumberArrays) {
  return arrayOfNumberArrays.map(numbers => Math.max(...numbers));
}

export {
  largeOfFour,
};
