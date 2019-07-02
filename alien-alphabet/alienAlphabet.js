
const getUniqueValues = (v, i, a) => a.indexOf(v) === i;

function alienAlphabet(words) {
  const characters = [];

  words.forEach((word) => {
    const charactersOfWords = word.split('');
    charactersOfWords.forEach(char => characters.push(char));
  });

  const uniqueCharacters = characters.filter(getUniqueValues);

  return uniqueCharacters;
}

export {
  alienAlphabet,
};
