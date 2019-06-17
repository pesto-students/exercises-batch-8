
function tripleAndFilter(numbers) {
  const tripledNumbers = numbers.map(number => number * 3);
  return tripledNumbers.filter(number => number % 5 === 0);
}

export {
  tripleAndFilter,
};
