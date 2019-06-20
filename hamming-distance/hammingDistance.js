
function hammingDistance(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    throw new Error('Strings must be of same length');
  }
  const charactersOfStringA = stringA.split('');
  const charactersOfStringB = stringB.split('');
  const differentCharacters = charactersOfStringA.filter((char, index) => (
    char !== charactersOfStringB[index]
  ));
  const distance = differentCharacters.length;
  return distance;
}

export {
  hammingDistance,
};
