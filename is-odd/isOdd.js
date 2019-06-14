
function isOdd(number) {
  const RADIX = 10;
  const operatedNumber = parseInt(number / 2, RADIX) * 2;

  return operatedNumber !== number;
}

export {
  isOdd,
};
