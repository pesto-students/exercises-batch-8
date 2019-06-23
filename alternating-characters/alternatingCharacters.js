
function alternatingCharacters([...strings]) {
  return strings.map(string => string.split('').reduce((acc, char) => {
    if (acc.lastChar === char) {
      acc.changes += 1;
    }
    acc.lastChar = char;
    return acc;
  }, { lastChar: '', changes: 0 }).changes);
}

export {
  alternatingCharacters,
};
