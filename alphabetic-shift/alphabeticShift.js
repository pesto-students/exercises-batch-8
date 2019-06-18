
function alphabeticShift(str) {
  const strArray = str.split('');
  const shiftedCharCodes = strArray.map(char => (char.charCodeAt() + 1));
  const shiftedStrArray = shiftedCharCodes.map(charCode => String.fromCharCode(charCode));
  return shiftedStrArray.join('');
}

export {
  alphabeticShift,
};
