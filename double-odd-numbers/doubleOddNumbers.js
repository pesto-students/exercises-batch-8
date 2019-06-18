function doubleOddNumbers(numbers) {
  const isOdd = number => number % 2 === 1;
  const double = number => number * 2;
  const oddNumbers = numbers.filter(isOdd);
  const doubledOddNumbers = oddNumbers.map(double);
  return doubledOddNumbers;
}

export { doubleOddNumbers };
