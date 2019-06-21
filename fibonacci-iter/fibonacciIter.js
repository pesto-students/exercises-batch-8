const fibonacciIter = {
  [Symbol.iterator]() {
    let lastNumber = 1;
    let secondLastNumber = 0;
    return {
      next() {
        const nextNumber = lastNumber + secondLastNumber;
        secondLastNumber = lastNumber;
        lastNumber = nextNumber;
        const object = { value: nextNumber, done: false };
        return object;
      },
    };
  },
};
export {
  fibonacciIter,
};
