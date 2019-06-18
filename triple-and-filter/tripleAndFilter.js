
function tripleAndFilter(numbers) {
  const isDivisibleByFive = num => num % 5 === 0;
  const filteredNumbers = numbers.filter(isDivisibleByFive);
  return filteredNumbers.map(num => num * 3);
}

export {
  tripleAndFilter,
};
