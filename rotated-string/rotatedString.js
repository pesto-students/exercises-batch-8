function rotatedStringProblem(originalString, rotatedString) {
  if (originalString === rotatedString) {
    return false;
  }
  const originalStringArray = originalString.split("");
  const rotatedStringArray = rotatedString.split("");
  let indexInRotatedString = rotatedStringArray.indexOf(originalStringArray[0]);
  if (indexInRotatedString < 0) {
    return false;
  }
  let isRotated = true;
  originalStringArray.forEach(character => {
    if (character !== rotatedStringArray[indexInRotatedString]) {
      isRotated = false;
    }
    indexInRotatedString =
      (indexInRotatedString + 1) % originalStringArray.length;
  });
  return isRotated;
}

export { rotatedStringProblem as rotatedString };
