const fibonacciIter = {
  [Symbol.iterator]() {
    let curr = 1;
    let prev = 0;
    let temp;
    const iterator = {
      next() {
        while (true) {
          temp = prev + curr;
          prev = curr;
          curr = temp;
          return { value: temp, done: false };
        }
      },
    };
    return iterator;
  },
};
export {
  fibonacciIter,
};
