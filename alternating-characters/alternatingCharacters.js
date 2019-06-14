function alternatingCharacters(strings) {
  const replacementCounts = strings.map((string) => {
    const alternatingCharactersString = string.split('').reduce((acc, character, index) => {
      if (index === 0 || acc[acc.length - 1] !== character) {
        return acc + character;
      }
      return acc;
    }, '');
    const replacementCount = string.length - alternatingCharactersString.length;
    return replacementCount;
  });
  return replacementCounts;
}

export { alternatingCharacters };
