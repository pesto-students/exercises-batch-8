function pairwise(array, pairSum) {
  const indexLookup = array.reduce(
    (acc, item, index) => ({
      ...acc,
      [item]: acc[item] === undefined ? [index] : [...acc[item], index],
    }),
    {},
  );
  function recursivePairwise(sum, index) {
    if (array.length === 0) {
      return sum;
    }
    const element = array[0];
    const pair = pairSum - element;
    if (
      indexLookup[element] !== undefined
      && indexLookup[element].length > 0
      && indexLookup[pair] !== undefined
      && indexLookup[pair].length > 0
    ) {
      const pairIndex = indexLookup[pair][0];
      if (index !== pairIndex) {
        array.shift();
        indexLookup[pair].shift();
        indexLookup[element].shift();
        return recursivePairwise(sum + index + pairIndex, index + 1);
      }
      indexLookup[pair].shift();
      return recursivePairwise(sum, index);
    }
    array.shift();
    return recursivePairwise(sum, index + 1);
  }
  return recursivePairwise(0, 0);
}

export { pairwise };
