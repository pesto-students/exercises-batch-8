const greatestCommonDivisor = (num1, num2) => (
  num2 === 0 ? num1 : greatestCommonDivisor(num2, num1 % num2)
);

const leastCommonMultiple = (num1, num2) => (
  (num1 * num2) / greatestCommonDivisor(num1, num2)
);

function smallestCommons(range) {
  let [lowerBound, upperBound] = range;
  if (lowerBound > upperBound) {
    [lowerBound, upperBound] = [upperBound, lowerBound];
  }
  let smallestCommon = lowerBound;
  for (let i = upperBound; i >= lowerBound; i -= 1) {
    smallestCommon = leastCommonMultiple(smallestCommon, i);
  }
  return smallestCommon;
}

export {
  smallestCommons,
};
