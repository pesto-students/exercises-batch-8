
function squareNumbersArray(...array) {
  // const hasNonNumericalArgs = array.filter(ele => typeOf ele === 'number');
  // if (hasNonNumericalArgs.length) {
  //   throw new Error('My custom error');
  // }
  const isNumber = el => typeof el === 'number';
  const isArrayOfNumbersOnly = array.every(isNumber);

  if (!isArrayOfNumbersOnly) {
    throw new Error('My custom error');
  }

  return arguments.map(ele => ele ** 2);
}

export {
  squareNumbersArray,
};
