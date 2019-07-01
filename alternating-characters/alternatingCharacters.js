
function alternatingCharacters(strings) {
  const getDeletionCount = (characters) => {
    let prevChar = '';
    const deletionCount = characters.reduce((count, char) => {
      if (!prevChar) {
        prevChar = char;
        return count;
      }
      if (prevChar === char) {
        return count + 1;
      }
      prevChar = char;
      return count;
    }, 0);

    return deletionCount;
  };

  const deletions = strings.map(word => getDeletionCount(word.split('')));

  return deletions;
}

export {
  alternatingCharacters,
};
