function roundTo(num, precision) {
  this.up = (number, precisionDigits) => {
    const multiplier = 10 ** precisionDigits;
    const multipliedNumber = number * multiplier;
    const isNumberUp = multipliedNumber > Math.floor(multipliedNumber);
    return isNumberUp ? (multipliedNumber + 1) / multiplier : multipliedNumber / multiplier;
  };
  this.down = (number, precisionDigits) => {
    const multiplier = 10 ** precisionDigits;
    const multipliedNumber = number * multiplier;
    return multipliedNumber / multiplier;
  };
  const multiplier = 10 ** precision;
  const multipliedNumber = num * multiplier;
  const isNumberUp = multipliedNumber > Math.floor(multipliedNumber);
  return isNumberUp ? (multipliedNumber + 1) / multiplier : multipliedNumber / multiplier;
}

export {
  roundTo,
};
