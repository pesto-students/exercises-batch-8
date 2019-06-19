function getRounded(number, precision) {
  return Math.round(number * (10 ** precision)) / (10 ** precision);
}

function applyOperator(operator, ...operands) {
  if (operator === undefined) {
    throw new Error('No operator found');
  }
  if (operands.length === 0) {
    return 0;
  }
  switch (operator) {
    case '+':
      return operands.reduce((a, b) => a + b);
    case '-':
      return operands.reduce((a, b) => a - b, 0);
    case '*':
      return operands.reduce((a, b) => a * b);
    case '/':
      return getRounded(operands.reduce((a, b) => a / b), 4);
    case '%':
      return operands.reduce((a, b) => a % b);
    default:
      throw new Error('Invalid Operator');
  }
}

export {
  applyOperator,
};
