const isNumber = n => typeof n === 'number';
function rangeIter(start, end) {
  if (!isNumber(start) || !isNumber(end)) {
    const error = new TypeError('Enter a valid number');
    throw error;
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

export { rangeIter };
