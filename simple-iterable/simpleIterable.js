
function simpleIterable(start = 1, end = 5) {
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
  simpleIterable,
};
