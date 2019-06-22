function isUpperCaseAlphabet(charCode) {
  return charCode <= 90 && charCode >= 65;
}

function isLowerCaseAlphabet(charCode) {
  return charCode <= 122 && charCode >= 97;
}

function isAlphabet(charCode) {
  return isLowerCaseAlphabet(charCode) || isUpperCaseAlphabet(charCode);
}

function shift(character, shiftCount) {
  const charCode = character.charCodeAt(0);
  if (!isAlphabet(charCode)) {
    throw new Error(`Invalid character ${character} in input string`);
  }
  if (isUpperCaseAlphabet(charCode)) {
    const resultantCharCode = ((charCode + shiftCount) % 65) + 65;
    return String.fromCharCode(resultantCharCode);
  }
  const resultantCharCode = ((charCode + shiftCount) % 97) + 97;
  return String.fromCharCode(resultantCharCode);
}

function alphabeticShift(string) {
  return string.split('').map(character => shift(character, 1)).join('');
}

export {
  alphabeticShift,
};
