
function alphabeticShift(string) {
  const chars = string.split('');
  const shiftedChars = chars.map((char) => {
    const shiftedASCIIValue = char.charCodeAt(0) + 1;
    return String.fromCharCode(shiftedASCIIValue);
  });
  const shiftedString = shiftedChars.join('');
  return shiftedString;
}

export {
  alphabeticShift,
};
