/* eslint-disable no-restricted-globals */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */

function squareNumbersArray(...elements) {
  const notNumericArray = elements.some(isNaN);
  if(notNumericArray) { 
    throw new Error('Array of numbers is required');
  }
  const numbers = elements;
  return numbers.map(number => number * number);
}
export {
  squareNumbersArray,
};
