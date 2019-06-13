/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
function alternatingCharacters(strings) {
  const totalLettersToRemove = [];
  strings = strings.map((string) => {
    let previousLetter = null;
    totalLettersToRemove.push(string.split('').map((letter) => {
      if (letter === previousLetter) {
        previousLetter = letter;
        letter = null;
      } else {
        previousLetter = letter;
      }
      return letter;
    }).filter(letter => letter === null).length);
    return null;
  });
  return totalLettersToRemove;
}

export {
  alternatingCharacters,
};
