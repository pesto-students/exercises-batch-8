function squareNumbersArray(array) {
  return array.map((element) => {
    const numConvertedElement = Number(element);
    const isElementNumber = !Number.isNaN(numConvertedElement);
    if (isElementNumber) return numConvertedElement ** 2;
    throw Error('Array contains a Non-number element');
  });
}

export {
  squareNumbersArray,
};
