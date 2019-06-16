
function rotatedString(string1, string2) {
  if (string1 === string2) {
    return false;
  }
  return (string2 + string2).includes(string1);
}

export {
  rotatedString,
};
