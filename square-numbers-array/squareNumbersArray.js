
const arraySquare = arr => arr.map(a => a * a);

function squareNumbersArray(...args) {
  if (args.some(isNaN)) {
    throw new Error('this function can only square numbers');
  } else {
    return arraySquare(args);
  }
}

export {
  squareNumbersArray,
};
