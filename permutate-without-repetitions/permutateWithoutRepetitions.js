
function permutateWithoutRepetitions(permutationOptions) {
  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  const permutations = [];
  const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));
  const firstOption = permutationOptions[0];

  for (let i = 0; i < smallerPermutations.length; i += 1) {
    const smallerPermutation = smallerPermutations[i];
    for (let j = 0; j <= smallerPermutation.length; j += 1) {
      const permutationPrefix = smallerPermutation.slice(0, j);
      const permutationSuffix = smallerPermutation.slice(j);
      permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
    }
  }

  return permutations;
}

export {
  permutateWithoutRepetitions,
};
