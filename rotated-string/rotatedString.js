
function rotatedString(string, rotateString) {
  let result;
  if (string === rotateString) {
    result = false;
  } else {
    result = (rotateString + rotateString).includes(string);
  }
  return result;
}

export {
  rotatedString,
};
