
const getCharacterCode = char => char.charCodeAt(0);
const shiftCharacterCodeByOne = charCode => charCode + 1;

function alphabeticShift(string) {
  const characterCodes = Array.from(string).map(getCharacterCode);
  const shiftedCharacterCodes = characterCodes.map(shiftCharacterCodeByOne);
  const shiftedString = String.fromCharCode(...shiftedCharacterCodes);
  return shiftedString;
}

export {
  alphabeticShift,
};
