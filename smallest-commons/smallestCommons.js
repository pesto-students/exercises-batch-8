
const greatestCommonDivisor = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return greatestCommonDivisor(secondNum, firstNum % secondNum);
};

function smallestCommons(limits) {
  const range = (min, max) => [...Array(max - min + 1).keys()].map(key => key + min);

  const [lowerLimit, upperLimit] = limits.sort((a, b) => a - b);
  const numbers = range(lowerLimit, upperLimit);

  const multiple = numbers.reduce((multipleAccumulator, number) => {
    const gcd = greatestCommonDivisor(multipleAccumulator, number);
    const newMultiple = multipleAccumulator * number / gcd;
    return newMultiple;
  }, lowerLimit);

  return multiple;
}

export {
  smallestCommons,
};
