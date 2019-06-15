
function applyOperator(operator, ...args) {
  if (operator === undefined) throw new Error();
  if (args.length === 0) return 0;

  switch (operator) {
    case '+':
      return args.reduce((acc, curr) => acc + curr);
    case '-':
      return args.reduce((acc, curr) => acc - curr, 0);
    case '/':
      return parseFloat(args.reduce((acc, curr) => acc / curr).toFixed(4));
    case '%':
      return args.reduce((acc, curr) => acc % curr);
    case '*':
      return args.reduce((acc, curr) => acc * curr);
    default:
      throw new Error('Invalid Operator');
  }
}


export {
  applyOperator,
};
