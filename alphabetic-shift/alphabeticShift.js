
function alphabeticShift(string) {
  const shiftedString = string.split('').map((char) => {
    const charCode = char.charCodeAt(0);
    return String.fromCharCode(charCode + 1);
  });
  return shiftedString.join('');
}

export {
  alphabeticShift,
};
