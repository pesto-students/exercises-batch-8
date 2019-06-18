function rangeIter(lowerLimit, upperLimit) {
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
