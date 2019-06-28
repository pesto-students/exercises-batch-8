
function rotatedString(original, rotated) {
  if (typeof original !== 'string' || typeof rotated !== 'string') {
    throw new Error('Expected string arguments');
  }
  if (original.length !== rotated.length) {
    return false;
  }
  if (original === rotated) {
    return false;
  }
  if ((original + original).includes(rotated)) {
    return true;
  }
  return false;
}

export {
  rotatedString,
};
