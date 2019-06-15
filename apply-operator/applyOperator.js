const add = values => values.reduce((result, value) => result + value, 0);

const subtract = values => values.reduce((result, value) => result - value, 0);

const multiply = values => values.reduce((result, value) => result * value, 1);

const divide = values => values.reduce((result, value) => result / value);

const mod = values => values.reduce((result, value) => result % value);


function applyOperator(...args) {
  const operator = args[0];
  const values = args.slice(1);
  let result;

  if (!operator) {
    throw new Error('Operand is not specified');
  } else if (values.length === 0) {
    result = 0;
  } else if (operator === '+') {
    result = add(values);
  } else if (operator === '-') {
    result = subtract(values);
  } else if (operator === '*') {
    result = multiply(values);
  } else if (operator === '/') {
    const decimalPlaces = 4;
    const factorof10 = 10 ** decimalPlaces;
    result = Math.round(divide(values) * factorof10) / factorof10;
  } else if (operator === '%') {
    result = mod(values);
  }
  return result;
}

export {
  applyOperator,
};
