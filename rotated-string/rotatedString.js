
function rotatedString(baseString, afterRotationString) {
  if (baseString === afterRotationString) {
    return false;
  }
  return (afterRotationString + afterRotationString).includes(baseString);
}

export {
  rotatedString,
};
