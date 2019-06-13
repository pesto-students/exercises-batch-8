
function rotatedString(firstString, secondString) {
  if (firstString === secondString || firstString.length !== secondString.length) {
    return false;
  }

  let firstStringCopy = firstString;
  for (let i = 0; i < firstString.length; i += 1) {
    const initialChar = firstStringCopy.substr(0, 1);
    const remaining = firstStringCopy.substr(1);
    firstStringCopy = remaining + initialChar;
    if (firstStringCopy === secondString) {
      return true;
    }
  }
  return false;
}

export {
  rotatedString,
};
