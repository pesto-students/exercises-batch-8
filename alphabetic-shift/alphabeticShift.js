
function alphabeticShift([...charArray]) {
  const charCodeArray = charArray.map(char => char.charCodeAt(0));
  const shiftedCharCodeArray = charCodeArray.map(charCode => charCode + 1);
  const shiftedString = String.fromCharCode(...shiftedCharCodeArray);
  return shiftedString;
}

export {
  alphabeticShift,
};
