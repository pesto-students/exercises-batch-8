
function reverseString(...args) {
  const originalString = args[0];
  let finalReversedString = '';
  for (let i = originalString.length - 1; i >= 0; i--) {
    finalReversedString += originalString[i];
  }
  return finalReversedString;
}

export {
  reverseString,
};
