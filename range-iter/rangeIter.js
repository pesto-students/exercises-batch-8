function rangeIter(lowerLimit, upperLimit) {
  if (upperLimit === undefined && lowerLimit === undefined) {
    throw new TypeError('undefined is not a number');
  }
  if (upperLimit !== undefined && lowerLimit === undefined) {
    throw new TypeError('undefined is not a number');
  }
  if (upperLimit === undefined && lowerLimit !== undefined) {
    throw new TypeError('a is not a number');
  }
  const resultArray = [];
  if (lowerLimit < upperLimit) {
    for (let i = lowerLimit; i <= upperLimit; i++) {
      resultArray.push(i);
    }
    return resultArray;
  }
  if (lowerLimit > upperLimit) {
    return resultArray;
  }
  if (lowerLimit === upperLimit) {
    return [lowerLimit];
  }
}

export { rangeIter };
