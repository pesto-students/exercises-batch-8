const roundUpDown = {
  up: (number, precision) => {
    const precisionMultiplier = 10 ** precision;
    return Math.ceil(number * precisionMultiplier) / precisionMultiplier;
  },
  down: (number, precision) => {
    const precisionMultiplier = 10 ** precision;
    return Math.floor(number * precisionMultiplier) / precisionMultiplier;
  },
};

function round(num, precision) {
  if (precision < 0) {
    precision *= -1;
    const precisionMultiplier = Math.pow(10, precision);
    if (((num / precisionMultiplier) * 10).toFixed(1) % 10 >= 5) {
      return (((num / precisionMultiplier) | 0) + 1) * precisionMultiplier;
    }
    return ((num / precisionMultiplier) | 0) * precisionMultiplier;
  }
  const precisionMultiplier = Math.pow(10, precision);
  if (((num * precisionMultiplier).toFixed(1) * 10) % 10 >= 5) {
    return ((num * precisionMultiplier + 1) | 0) / precisionMultiplier;
  }
  if (precision === 0) {
    if ((num * 10).toFixed(1) % 10 >= 5) {
      return (num | 0) + 1;
    }
    return num | 0;
  }
  return Number(num.toFixed(precision));
}
function up(num, precision) {
  return 0.5;
}
function roundTo(num, precision) {
  up(num, precision);
  return round(num, precision);
}
Object.setPrototypeOf(roundTo, roundUpDown);
export { roundTo };
