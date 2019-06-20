const nextNumberInRange = (min, max, prevNumber, step) => {
  const next = prevNumber + step;
  if (next > max) {
    return (next % max) + min;
  }
  return next;
}

function substitutionCipher(text) {
  const characters = text.split('');

  const encodedCharacters = [];
  for (const character of characters) {
    if (character === '.' || character === ' ' || character === '\n') {
      encodedCharacters.push(character);
    }
  }
}

export {
  substitutionCipher,
};
