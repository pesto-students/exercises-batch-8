
function tripleAndFilter(numbers) {
  // Since 3 and 5 have no common factors, we can skip tripling all numbers
  // We only need to triple multiples of 5.
  const multiplesOf5 = numbers.filter(num => num % 5 === 0);
  const tripledNumbers = multiplesOf5.map(num => num * 3);
  return tripledNumbers;
}

export {
  tripleAndFilter,
};
