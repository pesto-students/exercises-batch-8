
function squareNumbersArray(...arr) {
  if (!arr.every(Number)) {
    throw new Error('My custom error');
  }
  return arr.map(num => num ** 2);
}

export {
  squareNumbersArray,
};
