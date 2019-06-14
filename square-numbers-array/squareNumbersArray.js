function squareNumbersArray(...args) {
  // check for non-numeric elements
  const arrayWithNan = args.some(num => isNaN(num));
  if (arrayWithNan) { 
    throw new Error('My custom error');
  }
  const numbers = args;
  return numbers.map(num => num * num);
}

export {
  squareNumbersArray,
};
