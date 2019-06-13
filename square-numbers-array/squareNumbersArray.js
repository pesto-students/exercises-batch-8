
function squareNumbersArray(...array) {
  const hasNonNumericalArgs = array.filter(ele => Number.isNaN(parseInt(ele, 10)));
  if (hasNonNumericalArgs.length) {
    throw new Error('My custom error');
  }
  return arguments.map(ele => ele ** 2);
}

export {
  squareNumbersArray,
};
