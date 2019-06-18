
function simpleIterable() {
  return {
    values: [1, 2, 3, 4, 5],
    current: 0,
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const value = this.values[this.current];
      const done = value === undefined;
      this.current += 1;
      return {
        value,
        done,
      };
    },
  };
}

export {
  simpleIterable,
};
