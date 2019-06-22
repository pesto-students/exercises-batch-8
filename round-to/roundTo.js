const roundFunctions = {
  up: (number, precision) => {
    const rounder = 10 ** precision;
    return Math.ceil(number * rounder) / rounder;
  },
  down: (number, precision) => {
    const rounder = 10 ** precision;
    return Math.floor(number * rounder) / rounder;
  },
};

function roundTo(num, precision) {
  const leastSignificantDigit = ((num * (10 ** (precision + 1))) % 10);
  if (leastSignificantDigit > 4.5) {
    return roundFunctions.up(num, precision);
  }
  return roundFunctions.down(num, precision);
}

Object.setPrototypeOf(roundTo, roundFunctions);

export {
  roundTo,
};
