const alternatingCharacterCount = charArray => charArray.reduce((result, char, index, arr) => {
  if (char === arr[index + 1]) {
    return result + 1;
  }
  return result;
}, 0);

function alternatingCharacters(stringArray) {
  return stringArray.map((string) => {
    const charArray = string.split('');
    return alternatingCharacterCount(charArray);
  });
}

export { alternatingCharacters };
