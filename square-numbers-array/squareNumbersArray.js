
function squareNumbersArray(...args) {
  args.forEach((arg) => {
    if (typeof arg !== 'number') {
      throw new Error('My custom error');
    }
  });
}

export {
  squareNumbersArray,
};
