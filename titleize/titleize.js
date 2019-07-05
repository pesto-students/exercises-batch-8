const isCharacterAllowed = previousCharacter => previousCharacter === '' || previousCharacter === ' ' || previousCharacter === '-';


function titleize(sentence) {
  if (!sentence) {
    return sentence;
  }
  const characters = sentence.split('');
  // const start = ;
  const resultantantVersion = characters.reduce((acc, currentCharacter) => {
    if (isCharacterAllowed(acc.previousCharacter)) {
      acc.titleCase += currentCharacter.toUpperCase();
    } else {
      acc.titleCase += currentCharacter.toLowerCase();
    }
    // prev = curr
    acc.previousCharacter = currentCharacter;

    return acc;
  }, { previousCharacter: '', titleCase: '' });
  return resultantantVersion.titleCase;
}

export {
  titleize,
};
