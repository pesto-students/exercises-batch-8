function greatestCommonDivisor(numberOne, numberTwo) {
  if (numberOne === 0) {
    return numberTwo;
  }
  return greatestCommonDivisor(numberTwo % numberOne, numberOne);
}

function leastCommonMultiple(numberOne, numberTwo) {
  return (numberOne * numberTwo) / greatestCommonDivisor(numberOne, numberTwo);
}
export {
  leastCommonMultiple,
};
