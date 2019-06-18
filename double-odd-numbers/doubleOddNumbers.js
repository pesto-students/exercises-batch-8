
function doubleOddNumbers(numbers) {
  const isOdd = num => num % 2 !== 0;
  const double = num => num * 2;
  const oddNumbers = numbers.filter(isOdd);
  return oddNumbers.map(double);
}

export {
  doubleOddNumbers,
};
