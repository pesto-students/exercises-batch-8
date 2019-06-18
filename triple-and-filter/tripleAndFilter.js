function tripleAndFilter(array) {
  const triple = number => number * 3;
  const divisibleByFivePredicate = number => number % 5 === 0;
  return array.map(triple).filter(divisibleByFivePredicate);
}

export { tripleAndFilter };
