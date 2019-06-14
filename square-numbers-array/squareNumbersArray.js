
function squareNumbersArray(...array) {
  const squareArray = array.map((value) => {
    if (!Number(value)) {
      throw Error('My custom error');
    }
    return value ** 2;
  });
  return squareArray;
}

export {
  squareNumbersArray,
};
