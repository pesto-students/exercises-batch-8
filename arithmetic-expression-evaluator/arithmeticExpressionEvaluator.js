import { Stack } from './stack';

const END_OF_EXPRESSION = 'eoa';

function isOperator(string) {
  if (
    string === '-'
    || string === '+'
    || string === '*'
    || string === '/'
    || string === END_OF_EXPRESSION
  ) {
    return true;
  }
  return false;
}

function isNumber(string) {
  return !Number.isNaN(Number(string));
}

const precedence = {
  '/': 4,
  '*': 3,
  '+': 2,
  '-': 2,
  [END_OF_EXPRESSION]: 1,
};

function shouldApply(element, operatorStack) {
  const topOperator = operatorStack.peek();
  if (precedence[element] <= precedence[topOperator]) {
    return true;
  }
  return false;
}

function getResult(operator, value1, value2) {
  if (value1 === undefined || value2 === undefined) {
    throw new Error(`Invalid Expression near ${operator}`);
  }
  if (Number.isNaN(Number(value1))) {
    throw new Error(`Invalid Value  ${value1}`);
  }
  if (Number.isNaN(Number(value2))) {
    throw new Error(`Invalid Value  ${value2}`);
  }
  const operand1 = Number(value1);
  const operand2 = Number(value2);

  if (Math.floor(operand1) !== operand1) {
    throw new Error(`Invalid Value  ${operand1}`);
  }

  if (Math.floor(operand2) !== operand2) {
    throw new Error(`Invalid Value  ${operand1}`);
  }

  if (operator === '+') {
    return operand1 + operand2;
  }
  if (operator === '-') {
    return operand1 - operand2;
  }
  if (operator === '*') {
    return operand1 * operand2;
  }
  if (operator === '/') {
    return operand1 / operand2;
  }
  throw new Error(`Invalid Operator  ${operator}`);
}

function applyOperator(valuesStack, operatorStack) {
  const operator = operatorStack.pop();
  const value2 = valuesStack.pop();
  const value1 = valuesStack.pop();
  const result = getResult(operator, value1, value2);
  return result;
}

function getExpressionArray(expression) {
  const expressionObject = expression.split('').reduce(
    (acc, character) => {
      const accCopy = { ...acc };
      if (isOperator(character)) {
        const accumulatedValueString = acc.accumulatedValueString.replace(/\s/g, ' ');
        if (!isNumber(accumulatedValueString)) {
          throw new Error(`invalid expression near ${accumulatedValueString}`);
        }
        accCopy.values.push(accumulatedValueString);
        accCopy.values.push(character);
        accCopy.accumulatedValueString = '';
      } else {
        accCopy.accumulatedValueString += character;
      }
      return accCopy;
    },
    { values: [], accumulatedValueString: '' },
  );
  const expressionArray = expressionObject.values;
  if (!isNumber(expressionObject.accumulatedValueString)) {
    throw new Error(`invalid expression near ${expressionObject.accumulatedValueString}`);
  }
  expressionArray.push(expressionObject.accumulatedValueString);
  expressionArray.push(END_OF_EXPRESSION);
  return expressionArray;
}

function arithmeticExpressionEvaluator(expression) {
  const valuesStack = new Stack();
  const operatorStack = new Stack();
  const expressionArray = getExpressionArray(expression);
  for (const element of expressionArray) {
    if (isOperator(element)) {
      while (shouldApply(element, operatorStack)) {
        const result = applyOperator(valuesStack, operatorStack);
        valuesStack.push(result);
      }
      operatorStack.push(element);
    } else {
      valuesStack.push(element);
    }
  }
  const result = valuesStack.peek();
  return result;
}

export { arithmeticExpressionEvaluator };
