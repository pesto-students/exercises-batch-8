
function tripleAndFilter(numbers) {
  const multiplesOf5 = numbers.filter(num => num % 5 === 0);
  const tripledNumbers = multiplesOf5.map(num => num * 3);
  return tripledNumbers;
}

export {
  tripleAndFilter,
};
