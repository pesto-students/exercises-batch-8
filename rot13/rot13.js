const decodeCharByRot13 = (char) => {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const encodedAlphabets = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  const indexInEncoded = encodedAlphabets.indexOf(char);
  return alphabets.charAt(indexInEncoded);
};

function rot13(encodedText) {
  const chars = encodedText.split('');
  const decodedChars = chars.map((char) => {
    if (char.match(/[A-Z]/)) {
      return decodeCharByRot13(char);
    }
    return char;
  });

  return decodedChars.join('');
}

export {
  rot13,
};
