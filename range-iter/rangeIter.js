
function rangeIter(start, end) {
  const isNumber = num => typeof num === 'number';

  if (!end) {
    throw new TypeError(`${end} is not a number`);
  }

  if (!isNumber(end)) {
    throw new TypeError(
      `${end} is not a number`,
    );
  }

  let currentIndex = start;
  return {
    [Symbol.iterator]() {
      currentIndex = start;
      return this;
    },
    next() {
      if (currentIndex <= end) {
        const value = { done: false, value: currentIndex };
        currentIndex += 1;
        return value;
      }
      return { done: true };
    },
  };
}

export {
  rangeIter,
};
