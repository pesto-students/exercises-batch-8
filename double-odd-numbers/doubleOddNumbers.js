
const isOdd = number => number % 2 === 1;
const double = number => number * 2;
function doubleOddNumbers(numbers) {
  return numbers.filter(isOdd).map(double);
}

export {
  doubleOddNumbers,
};
