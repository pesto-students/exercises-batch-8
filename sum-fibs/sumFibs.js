function getFibonacci(limit) {
  const fibonacciSeries = [];

  fibonacciSeries.push(1);
  fibonacciSeries.push(1);

  while (fibonacciSeries[fibonacciSeries.length - 1] <= limit) {
    const { length } = fibonacciSeries;
    fibonacciSeries.push(fibonacciSeries[length - 1] + fibonacciSeries[length - 2]);
  }

  fibonacciSeries.pop();
  return fibonacciSeries;
}

function isOdd(mayBeOdd) {
  // eslint-disable-next-line no-bitwise
  return Boolean(mayBeOdd & 1);
}

function sumFibs(num) {
  const fibonacciSeries = getFibonacci(num);
  return fibonacciSeries.reduce((acc, nextNum) => {
    if (isOdd(nextNum)) {
      return acc + nextNum;
    }
    return acc;
  }, 0);
}

export {
  sumFibs,
};
