
function reverseString(...args) {
  const originalString = args[0];
  let finalReversedString = '';
  // Just iterate over the array from the back and add the characters to the finalReversedString array
  for (let i = originalString.length - 1; i >= 0; i--) {
    finalReversedString += originalString[i];
  }
  return finalReversedString;
}

export {
  reverseString,
};
