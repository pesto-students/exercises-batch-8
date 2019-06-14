const sqrt = number => Math.sqrt(number);

const power = (number, exponent) => number ** exponent;

const round = number => Math.round(number);

function mathFns(...args) {
  return args;
}

export {
  mathFns,
  sqrt,
  power,
  round,
};
