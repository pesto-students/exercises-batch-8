const isOdd = number => number % 2 === 1;

function sumFibs(number) {
  const fibSequence = [1, 1];
  let i = 2;
  do {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    i += 1;
  } while (fibSequence[i - 1] + fibSequence[i - 2] < number);
  return fibSequence.filter(isOdd).reduce((a, b) => a + b);
}

export {
  sumFibs,
};
