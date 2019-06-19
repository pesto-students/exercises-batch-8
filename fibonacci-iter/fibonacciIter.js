const fibonacciIter = {
  fib: [1, 1],
  index: -1,
  getNextFib() {
    if (this.fib[this.index] === undefined) {
      this.fib[this.index] = this.fib[this.index - 1] + this.fib[this.index - 2];
    }
    this.index += 1;
    return this.fib[this.index - 1];
  },

  [Symbol.iterator]() {
    return {
      next: () => ({
        value: this.getNextFib(),
        done: false,
      }),
    };
  },
};


export {
  fibonacciIter,
};
