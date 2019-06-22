function combine(item, arrays) {
  return arrays.map(array => [item, ...array]);
}

function permutateWithRepetitionsRecursive(characterArray) {
  if (characterArray.length === 1) {
    return [[characterArray[0]]];
  }
  return characterArray.reduce((acc, currentItem, idx, array) => {
    const accCopy = [...acc];
    array.map((item, index) => {
      const characterArrayCopy = [...array];
      characterArrayCopy.splice(array.length - index - 1, 1);
      accCopy.push(...combine(currentItem, permutateWithRepetitionsRecursive(characterArrayCopy)));
      return item;
    }, []);
    return accCopy;
  }, []);
}

function permutateWithRepetitions(characterArray) {
  const permutations = permutateWithRepetitionsRecursive(characterArray);
  const stringRepresentation = permutations.map(item => item.join());
  const uniquePermutations = new Set(stringRepresentation);
  const sortedPermutations = [...uniquePermutations].sort();
  return sortedPermutations.map(item => item.split(','));
}

export {
  permutateWithRepetitions,
};
