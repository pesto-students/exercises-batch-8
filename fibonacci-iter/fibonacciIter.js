
const fibonacciIter = {
  [Symbol.iterator]() {
    this.first = 0;
    this.second = 1;
    return {
      next: () => {
        const temp = this.second;
        this.second = this.second + this.first;
        this.first = temp;
        return {
          value: this.second,
          done: false,
        };
      },
    };
  },
};

export {
  fibonacciIter,
};
