
function applyOperator(operator, ...operands) {
  let result = 0;

  const anOperator = {
    ADDITION: '+',
    SUTRACTION: '-',
    MULTIPLICATION: '*',
    DIVISION: '/',
    MODULUS: '%',
  };

  if (operands.length === 0 && operator !== undefined) {
    return 0;
  }

  switch (operator) {
    case anOperator.ADDITION: {
      result = operands.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      break;
    }
    case anOperator.SUTRACTION: {
      result = operands.reduce((accumulator, currentValue) => {
        return accumulator - currentValue;
      }, 0);
      break;
    }
    case anOperator.MODULUS: {
      result = operands.reduce((accumulator, currentValue) => {
        return accumulator % currentValue;
      });
      break;
    }
    case anOperator.DIVISION: {
      result = parseFloat(operands.reduce((accumulator, currentValue) => {
        return accumulator / currentValue;
      }).toFixed(4));
      break;
    }
    case anOperator.MULTIPLICATION: {
      result = operands.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
      });
      break;
    }
    default:
    {
      throw Error;
    }
  }

  return result;
}

export {
  applyOperator,
};
