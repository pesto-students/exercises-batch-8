
function pairwise(numbers, targetValue) {
  const usedFlags = numbers.map(() => 0);
  let sumOfPairIndices = 0;
  // eslint-disable-next-line prefer-destructuring
  const length = numbers.length;

  for (let i = 0; i < length - 1; i += 1) {
    if (usedFlags[i] === 0) {
      for (let j = i + 1; j < length; j += 1) {
        if (usedFlags[j] === 0) {
          if (numbers[i] + numbers[j] === targetValue) {
            sumOfPairIndices += i + j;
            usedFlags[j] = 1;
            usedFlags[i] = 1;
            break;
          }
        }
      }
    }
  }
  return sumOfPairIndices;
}

export {
  pairwise,
};
