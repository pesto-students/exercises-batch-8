function rot13(stringToRotate) {
  const characterArray = stringToRotate.split("");
  const pattern = /[A-Z]/;
  const resultantArray = characterArray.map(character => {
    if (character.match(pattern)) {
      let ascii = character.charCodeAt() - 13;
      if (ascii < "A".charCodeAt()) {
        ascii += 26;
      }
      return String.fromCharCode(ascii);
    }
    return character;
  });
  return resultantArray.join("");
}

export { rot13 };
