const sum = arr => arr.reduce((acc, val) => acc + val);
const product = arr => arr.reduce((acc, val) => acc * val);
const divide = arr => arr.reduce((acc, val) => Number(((acc * 10000) / (val * 10000)).toFixed(4)));
const modulus = arr => arr.reduce((acc, val) => acc % val);

function applyOperator(...args) {
  if (!args.length) {
    throw Error('Operator not specified');
  }
  if (args.length === 1) {
    return 0;
  }

  const operator = args[0];
  const operands = args.slice(1);

  if (operator === '+') {
    return sum(operands);
  }
  if (operator === '-') {
    return sum(operands.map(num => -num));
  }
  if (operator === '*') {
    return product(operands);
  }
  if (operator === '/') {
    return divide(operands);
  }
  if (operator === '%') {
    return modulus(operands);
  }
  throw new Error('Unknown Operator');
}

export {
  applyOperator,
};
