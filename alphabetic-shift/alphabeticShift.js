function shiftChar(char) {
  const charCode = char.charCodeAt(0);
  const SMALLA = 'a'.charCodeAt(0);
  const CAPITALA = 'A'.charCodeAt(0);
  if (charCode >= SMALLA) {
    return String.fromCharCode(SMALLA + ((charCode - SMALLA + 1) % 26));
  }
  return String.fromCharCode(CAPITALA + ((charCode - CAPITALA + 1) % 26));
}
function alphabeticShift(str) {
  if (str.length === 0) {
    return '';
  }
  return shiftChar(str[0]) + alphabeticShift(str.substr(1));
}

export {
  alphabeticShift,
};
