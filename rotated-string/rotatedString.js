function rotatedString(string1, string2) {
  function rotate(string, rotationNumber) {
    if (rotationNumber !== 0 && string === string2) {
      return true;
    }
    if (rotationNumber === string1.length - 1) {
      return false;
    }
    const stringArray = string.split('');
    const firstElement = stringArray.shift();
    stringArray.push(firstElement);
    const nextRotatedString = stringArray.join('');
    return rotate(nextRotatedString, rotationNumber + 1);
  }
  return rotate(string1, 0);
}

export { rotatedString };
