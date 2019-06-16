
const charCodes = stringArray => stringArray.map(char => char.charCodeAt());

const CHAR_CODE_A = 'A'.charCodeAt();
const CHAR_CODE_Z = 'Z'.charCodeAt();
const isAlphabet = charCode => charCode >= CHAR_CODE_A && charCode <= CHAR_CODE_Z;
const decipherCodesArray = stringArray => charCodes(stringArray)
  // eslint-disable-next-line no-confusing-arrow
  .map(charCode => isAlphabet(charCode) ? CHAR_CODE_A + ((charCode - CHAR_CODE_A + 13) % 26) : charCode);

const charArray = codesArray => codesArray.map(code => String.fromCharCode(code));

function rot13(string) {
  const decipherCodes = decipherCodesArray(string.split(''));

  return charArray(decipherCodes).join('');
}

export {
  rot13,
};
