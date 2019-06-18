const checkOdd = number => number % 2 === 1;
const Double = number => number * 2;

function doubleOddNumbers(numbers) {
  return numbers.filter(checkOdd).map(Double);
}

export { doubleOddNumbers };
