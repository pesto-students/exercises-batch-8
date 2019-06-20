const nextNumberInRange = (min, max, prevNumber, step) => {
  const next = prevNumber + step;
  if (next > max) {
    return (next % max) + (min - 1);
  }
  return next;
};

// test whether first bit is on, which signifies if num is odd
// eslint-disable-next-line no-bitwise
const isOdd = num => num & 1;

function substitutionCipher(text) {
  const characters = text.split('');

  const encodedCharacters = [];
  for (const character of characters) {
    const charCode = character.charCodeAt(0); // char code of 1st element
    if (charCode > 64 && charCode < 91) {
      const step = (isOdd(charCode) && 4) || 6;
      const newCharCode = nextNumberInRange(65, 90, charCode, step);
      encodedCharacters.push(String.fromCharCode(newCharCode));
    } else if (charCode > 96 && charCode < 123) {
      const step = (isOdd(charCode) && 4) || 6;
      const newCharCode = nextNumberInRange(97, 122, charCode, step);
      encodedCharacters.push(String.fromCharCode(newCharCode));
    } else {
      encodedCharacters.push(character);
    }
  }

  return encodedCharacters.join('');
}

export {
  substitutionCipher,
};
