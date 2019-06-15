
function alienAlphabet(words) {
  const characterLookup = {};
  const characterArrays = words.map(word => word.split(''));
  const alienAlphabetArray = characterArrays[0]
    .reduce((accumulatedAlphabet, _, index) => {
      const charactersAtIndex = characterArrays.map(array => array[index]);
      const newAlienCharacters = charactersAtIndex.reduce((acc, currentItem) => {
        if (currentItem !== undefined && characterLookup[currentItem] === undefined) {
          characterLookup[currentItem] = true;
          return [...acc, currentItem];
        }
        return acc;
      });
      return [...accumulatedAlphabet, ...newAlienCharacters];
    }, []);
  return alienAlphabetArray;
}

export {
  alienAlphabet,
};
