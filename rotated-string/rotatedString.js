
function rotatedString(string1, string2) {
  if (string1 === string2) {
    return false;
  }
  const mixedString = string1 + string1;
  return mixedString.includes(string2);
}

export {
  rotatedString,
};
