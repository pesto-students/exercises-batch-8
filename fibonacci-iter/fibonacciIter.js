const fibonacciIter = {
  fibonacciArray: [1, 0],
  flag: 0,
  calculateNextNumber() {
    this.flag++;
    if (this.flag > 2) {
      [this.fibonacciArray[0], this.fibonacciArray[1]] = [
        this.fibonacciArray[1],
        this.fibonacciArray[0],
      ];
      // swaping values of array

      return (this.fibonacciArray[0] = this.fibonacciArray[1] + this.fibonacciArray[0]);
    }
  },
  [Symbol.iterator]() {
    return {
      next: () => ({
        value: this.calculateNextNumber(),
        done: false,
      }),
    };
  },
};

export { fibonacciIter };
