
function squareNumbersArray(...numbers) {
  if (numbers.filter(number => typeof number !== 'number').length > 0) {
    throw Error('My custom error');
  }
  return numbers.map(number => number ** 2);
}

export {
  squareNumbersArray,
};
