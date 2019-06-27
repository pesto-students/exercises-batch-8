

function rotatedString(string, reversedString) {
  const fnRotate = (characters) => {
    characters.push(characters.shift());
    return characters;
  };

  const characters = string.split('');
  const reversed = fnRotate(fnRotate(characters));
  const strReversed = reversed.join('');

  return strReversed === reversedString;
}

export {
  rotatedString,
};
