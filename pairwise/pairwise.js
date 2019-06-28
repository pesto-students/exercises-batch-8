
function pairwise(numbers, sum) {
  const matchingSums = [];
  const matchedIndices = [];
  for (let i = 0; i < numbers.length - 1; i += 1) {
    if (!matchedIndices.includes(i)) {
      for (let j = i + 1; j < numbers.length; j += 1) {
        if (numbers[i] + numbers[j] === sum && !matchedIndices.includes(j)) {
          matchingSums.push(i, j);
          matchedIndices.push(j);
          break;
        }
      }
    }
  }
  return matchingSums.reduce((acc, current) => acc + current, 0);
}

export {
  pairwise,
};
