function squareNumbersArray(...array) {
  const squaredArray = array.map((item) => {
    if (!Number.isFinite(item)) {
      throw new Error('List should contain numbers only');
    }
    return item ** 2;
  });
  return squaredArray;
}

export { squareNumbersArray };
