
function hammingDistance(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    throw new Error('Indifferent lengths. No hamming distance computation is possible');
  }

  const minNumberOfDifferences = Array.from(stringOne).reduce((result, character, index) => {
    if (character !== stringTwo[index]) {
      return result + 1;
    }
    return result;
  }, 0);

  return minNumberOfDifferences;
}

export {
  hammingDistance,
};
