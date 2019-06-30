function greatestCommonDivisor(a, b) {
  let numberOne = a;
  let numberTwo = b;
  while (numberTwo) {
    const temp = numberTwo;
    numberTwo = numberOne % numberTwo;
    numberOne = temp;
  }
  return numberOne;
}

function leastCommonMultiple(a, b) {
  if (!a || !b) return 0;
  return Math.abs((a * b) / greatestCommonDivisor(a, b));
}

export {
  leastCommonMultiple,
};
