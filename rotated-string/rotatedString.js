function rotatedString(originalString, rotatedString) {
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
    indexInRotatedStr = (indexInRotatedStr + 1) % orgCharArr.length;
  });
  return rotated;
}

export { rotatedString };
