function getRot13Character(char) {
  const charCode = char.charCodeAt();
  if (charCode >= 65 && charCode <= 90) {
    if (char.charCodeAt() - 13 < 65) {
      return String.fromCharCode(char.charCodeAt() + 13);
    }
    return String.fromCharCode(char.charCodeAt() - 13);
  }
  return char;
}

function rot13(string) {
  return string
    .split('')
    .map(char => getRot13Character(char))
    .join('');
}

export { rot13 };
