
function argsString(string, words) {
  return words.reduce((acc, word) => acc.replace('{}', word), string);
}

export {
  argsString,
};
