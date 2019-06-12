function applyOperator(...args) {
  const [operator, ...operands] = args;
  if (operator === undefined) {
    throw new Error();
  }
  if (operands.length === 0) {
    return 0;
  }
  switch (operator) {
    case '+':
      return operands.reduce((a, b) => a + b);
    case '-':
      operands[0] = -operands[0];
      return operands.reduce((a, b) => a - b);
    case '*':
      return operands.reduce((a, b) => a * b);
    case '/':
      return Math.round(operands.reduce((a, b) => a / b) * 10000) / 10000;
    case '%':
      return operands.reduce((a, b) => a % b);
    default:
      throw new Error();
  }
}

export {
  applyOperator,
};
