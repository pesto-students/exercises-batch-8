
function doubleOddNumbers(numbers) {
  const odds = numbers.filter(number => number % 2 !== 0);
  const doubledOdds = odds.map(number => 2 * number);

  return doubledOdds;
}

export {
  doubleOddNumbers,
};
