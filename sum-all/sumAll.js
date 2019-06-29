
function sumAll(elements) {
  const min = Math.min(...elements);
  const max = Math.max(...elements);

  let sum = 0;
  for (let ele = min; ele <= max; ele += 1) {
    sum += ele;
  }
  return sum;
}

export {
  sumAll,
};
