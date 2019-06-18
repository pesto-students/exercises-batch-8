
function tripleAndFilter(numbers) {
  const trippledNumbers = numbers.map(number => number * 3);
  const isMultipleOfFive = num => num % 5 === 0;
  const multiplesOfFive = trippledNumbers.filter(isMultipleOfFive);
  return multiplesOfFive;
}

export {
  tripleAndFilter,
};
