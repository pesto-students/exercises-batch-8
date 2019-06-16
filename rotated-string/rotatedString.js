
const circularIncrementerOfCircleLen = length => index => (index + 1) % length;

function rotatedString(strA, strB) {
  if (strA === strB || strA.length !== strB.length) {
    return false;
  }
  const strLen = strA.length;

  for (let start = 0; start < strLen - 1; start += 1) {
    const builderArr = [];
    const circularIncrementer = circularIncrementerOfCircleLen(strLen);
    let rotatingIdx = start + 1;

    while (rotatingIdx !== start) {
      builderArr.push(strA[rotatingIdx]);
      rotatingIdx = circularIncrementer(rotatingIdx);
    }

    builderArr.push(strA[rotatingIdx]);
    if (builderArr.join('') === strB) {
      return true;
    }
  }
  return false;
}

export {
  rotatedString,
};
