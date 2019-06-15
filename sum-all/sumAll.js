function sumAll(array) {
  const sortedArray = array.sort((a, b) => a - b);
  const upper = sortedArray[1];
  const lower = sortedArray[0];
  function sum(current, sumValue) {
    if (current === upper) {
      return current;
    }
    return sumValue + current + sum(current + 1, sumValue);
  }
  return sum(lower, 0);
}

export { sumAll };
