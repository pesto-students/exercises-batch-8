
const fibonacciIter = {
  [Symbol.iterator]() {
    let firstNumber = 0;
    let currentNumber = 1;
    let nextNumber;
    const iterator = {
      next() {
        nextNumber = firstNumber + currentNumber;
        const returnObj = { value: nextNumber, done: false };
        firstNumber = currentNumber;
        currentNumber = nextNumber;
        return returnObj;
      },
    };
    return iterator;
  },
};

export {
  fibonacciIter,
};
