const sum = arr => arr.reduce((acc, val) => acc + val);
const product = arr => arr.reduce((acc, val) => acc * val);
const divide = arr => arr.reduce((acc, val) => Number(((acc * 10000) / (val * 10000)).toFixed(4)));
const modulus = arr => arr.reduce((acc, val) => acc % val);


function applyOperator(...args) {
  if (args.length === 0) {
    throw Error('Operator not specified');
  }
  if (args.length === 1) {
    return 0;
  }
  const operator = args[0];
  const operands = args.slice(1);
  switch (operator) {
    case '+':
      return sum(operands);
    case '-':
      return sum(operands.map(a => -a));
    case '*':
      return product(operands);
    case '/':
      return divide(operands);
    case '%':
      return modulus(operands);
    default:
      throw Error('Unknown operator');
  }
}

export {
  applyOperator,
};
