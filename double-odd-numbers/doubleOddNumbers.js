
const checkOdd = number => number % 2 === 1;
const performDouble = number => number * 2;

function doubleOddNumbers(numbers) {
  return numbers.filter(checkOdd).map(performDouble);
}

export {
  doubleOddNumbers,
};
