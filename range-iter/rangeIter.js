function isNumber(arg) {
  return typeof arg === 'number' && !Number.isNaN(arg);
}

function rangeIter(start, end) {
  if (!isNumber(start)) {
    throw new TypeError(`${start} is not a number`);
  }
  if (!isNumber(end)) {
    throw new TypeError(`${end} is not a number`);
  }
  let curr = start;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const val = curr;
      curr += 1;
      if (val <= end) {
        return {
          value: val,
          done: false,
        };
      }
      return {
        done: true,
      };
    },
  };
}

export {
  rangeIter,
};
