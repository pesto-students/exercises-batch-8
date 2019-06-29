function rot13(string) {
  const getChar = num => String.fromCharCode(num);

  const START = 'A'.charCodeAt();
  const END = 'Z'.charCodeAt();
  const SPACER = 13;
  const characters = string.split('');

  const replacedChars = characters.map((char) => {
    const charCode = char.charCodeAt();

    if (charCode >= START && charCode <= END) {
      const newCharCode = charCode - SPACER;

      if (newCharCode < START) {
        return getChar(charCode + SPACER);
      }
      return getChar(newCharCode);
    }

    return char;
  });

  return replacedChars.join('');
}

export {
  rot13,
};
