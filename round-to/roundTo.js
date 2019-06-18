function roundTo(num, precision) {
  const number = num < 0 ? -num : num;
  const multiplier = 10 ** precision;
  const multipliedNumber = (number * multiplier).toFixed(2);
  const upperBoundary = Math.ceil(multipliedNumber);
  const lowerBoundary = Math.floor(multipliedNumber);
  const isNumberUp = (upperBoundary - multipliedNumber) <= (multipliedNumber - lowerBoundary);
  const roundedNum = isNumberUp ? upperBoundary / multiplier : lowerBoundary / multiplier;
  return num < 0 ? -roundedNum : roundedNum;
}
roundTo.up = (num, precisionDigits) => {
  const number = num;
  const multiplier = 10 ** precisionDigits;
  const multipliedNumber = (number * multiplier).toFixed(2);
  const upperBoundary = Math.ceil(multipliedNumber);
  const lowerBoundary = Math.floor(multipliedNumber);
  const isNumberUp = lowerBoundary !== upperBoundary;
  const roundedNum = isNumberUp ? upperBoundary / multiplier : lowerBoundary / multiplier;
  return roundedNum;
};
roundTo.down = (num, precisionDigits) => {
  const number = num;
  const multiplier = 10 ** precisionDigits;
  const multipliedNumber = Math.floor(number * multiplier);
  const roundedNum = multipliedNumber / multiplier;
  return roundedNum;
};

export {
  roundTo,
};
