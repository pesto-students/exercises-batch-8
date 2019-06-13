
function rot13(encodedString) {
  return encodedString.replace(/([A-M])|([N-Z])/g, (match, firstHalf) => (
    String.fromCharCode(match.charCodeAt(0) + (firstHalf ? 13 : -13))
  ));
}

export {
  rot13,
};
