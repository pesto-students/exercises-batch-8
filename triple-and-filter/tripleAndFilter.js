const triple = number => number * 3;
const ifDivisibleBy5 = number => number % 5 === 0;
function tripleAndFilter(numbers) {
  return numbers.map(triple).filter(ifDivisibleBy5);
}

export {
  tripleAndFilter,
};
