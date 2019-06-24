
function alphabeticShift(string) {
  return string.split('').map((character) => {
    if (character.charCodeAt(0) === 90 || character.charCodeAt(0) === 122) {
      return String.fromCharCode(character.charCodeAt(0) - 25);
    }
    return String.fromCharCode(character.charCodeAt(0) + 1);
  }).join('');
}

export {
  alphabeticShift,
};
