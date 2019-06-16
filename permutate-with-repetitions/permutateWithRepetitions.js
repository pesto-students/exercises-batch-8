function permutate(chars, slots) {
  if (slots === 1) {
    return chars.map(char => [char]);
  }
  const subPermutations = permutate(chars, slots - 1);
  return chars.reduce(
    (permutations, char) => [
      ...permutations,
      ...subPermutations.map(subPermutation => [char, ...subPermutation]),
    ],
    [],
  );
}

function permutateWithRepetitions(chars) {
  return permutate(chars, chars.length);
}

export {
  permutateWithRepetitions,
};
