function rangeIter(lb, ub) {
  if (typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }
  if (typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
  let index = lb - 1;
  return {
    next: () => {
      if (index >= ub) {
        index = lb - 1;
        return {
          value: undefined,
          done: true,
        };
      }
      index += 1;
      return {
        value: index,
        done: false,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

export {
  rangeIter,
};
