
function doubleOddNumbers(numbers) {
  const oddNumbers = numbers.filter(number => number % 2 === 1);
  return oddNumbers.map(number => number * 2);
}

export {
  doubleOddNumbers,
};
