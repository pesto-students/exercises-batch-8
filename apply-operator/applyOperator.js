
const operators = {
  ADDITION: '+',
  SUBTRACTION: '-',
  MULTIPLICATION: '*',
  DIVISION: '/',
  MODULUS: '%',
};

function applyOperator(operator, ...numbers) {
  if (typeof operator === 'undefined' || !Array.isArray(numbers)) {
    throw new Error('Invalid parameters.');
  }

  // if (numbers.length === 1) {
  //   return numbers[0];
  // }

  let result;
  switch (operator) {
    case operators.ADDITION:
      result = numbers.reduce((acc, num) => acc + num, 0);
      break;

    case operators.SUBTRACTION:
      result = numbers.reduce((acc, num) => acc - num, 0);
      break;

    case operators.MULTIPLICATION:
      result = numbers.reduce((acc, num) => acc * num, 1);
      break;

    case operators.DIVISION:
      result = numbers.reduce((acc, num) => acc / num, 1);
      result = parseFloat(result.toFixed(4));
      break;

    case operators.MODULUS:
      result = numbers.reduce((acc, num) => acc % num);
      break;

    default:
      break;
  }

  return result;
}

export {
  applyOperator,
};
