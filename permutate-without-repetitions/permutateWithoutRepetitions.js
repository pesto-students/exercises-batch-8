// function permutateWithoutRepetitions([...args]) {
//   return args.reduce(permute, []);
// }

// function permute(res, item, key, arr) {
//   return res.concat(
//     (arr.length > 1
//       && arr
//         .slice(0, key)
//         .concat(arr.slice(key + 1))
//         .reduce(permute, [])
//         .map(perm => [item].concat(perm)))
//       || item,
//   );
// }
function permutateWithoutRepetitions(permutationOptions) {
  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  const permutations = [];

  const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));

  const firstOption = permutationOptions[0];

  for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
    const smallerPermutation = smallerPermutations[permIndex];

    for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
      const permutationPrefix = smallerPermutation.slice(0, positionIndex);
      const permutationSuffix = smallerPermutation.slice(positionIndex);
      permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
    }
  }

  return permutations;
}

export { permutateWithoutRepetitions };
