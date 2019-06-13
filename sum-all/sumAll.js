
function sumAll(values) {
  const [firstValue, lastValue] = values.sort((a, b) => a - b);
  let sum = 0;
  let index = firstValue;
  while (index <= lastValue) {
    sum += index;
    index += 1;
  }
  return sum;
}

export {
  sumAll,
};
