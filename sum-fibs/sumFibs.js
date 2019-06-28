const getFibonacci = (limit) => {
  let first = 1;
  let second = 1;
  let third;

  const fibonacci = [first, second];

  while (first + second < limit) {
    third = first + second;
    fibonacci.push(third);

    first = second;
    second = third;
  }

  return fibonacci;
};

function sumFibs(limit) {
  const fibs = getFibonacci(limit);
  const oddFibs = fibs.filter(num => num % 2 !== 0);
  const oddFibsSum = oddFibs.reduce((acc, num) => acc + num, 0);

  return oddFibsSum;
}

export {
  sumFibs,
};
