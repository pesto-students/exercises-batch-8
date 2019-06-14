
function squareNumbersArray(arr) {
  return arr.map((item) => {
    if (typeof item === 'number') {
      return item ** 2;
    }
    throw new Error(`Expected number, found ${typeof item}`);
  });
}

export {
  squareNumbersArray,
};
