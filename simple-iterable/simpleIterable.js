
function simpleIterable() {
  return {
    num: 0,
    next() {
      this.num = this.num + 1;
      if (this.num > 5) {
        return {
          done: true,
        };
      }
      return {
        done: false,
        value: this.num,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

export {
  simpleIterable,
};
