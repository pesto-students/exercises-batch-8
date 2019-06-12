
function applyOperator(operator, ...values) {
  if (operator === undefined) { throw Error('No operator specified'); }
  if (values.length === 0) { return 0; }
  // eslint-disable-next-line no-param-reassign
  if (operator === '-') values[0] = -values[0];
  return values.reduce((acc, val) => {
    switch (operator) {
      case '+':
        return acc + val;
      case '-':
        return acc - val;
      case '*':
        return acc * val;
      case '/':
        return Number((acc / val).toFixed(4));
      case '%':
        return acc % val;
      default:
        throw Error('Not a valid operation');
    }
  });
}

export {
  applyOperator,
};
