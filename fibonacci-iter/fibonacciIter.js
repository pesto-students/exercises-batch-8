
function* fibonacciGenerator() {
  let first = 1;
  let second = 2;
  yield first;
  yield second;
  while (true) {
    const next = first + second;
    first = second;
    second = next;
    yield next;
  }
}

const fibonacciIter = {
  [Symbol.iterator]: fibonacciGenerator,
};

export {
  fibonacciIter,
};
