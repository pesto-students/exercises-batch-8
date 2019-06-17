function charToDeleteToMakeAlternating(str) {
  const strArr = str.split('');
  let prevChar = str[0];
  for (let i = 1; i < strArr.length; i += 1) {
    const currChar = strArr[i];
    if (currChar === prevChar) {
      strArr[i] = '.'; // replace with '.' to signify deletion
    } else {
      prevChar = currChar;
    }
  }
  const alternatingStr = strArr.filter(char => char !== '.').join('');
  return str.length - alternatingStr.length;
}


function alternatingCharacters(strings) {
  const charsDeletedPerString = strings.map(string => charToDeleteToMakeAlternating(string));
  return charsDeletedPerString;
}

export {
  alternatingCharacters,
};
