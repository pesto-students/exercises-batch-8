function countAlternateSameChar(str) {
  return str.split('').reduce((count, char, index, arr) => {
    if (index < arr.length - 1 && arr[index] === arr[index + 1]) {
      return count + 1;
    }
    return count;
  }, 0);
}

function alternatingCharacters(strings) {
  return strings.map(countAlternateSameChar);
}

export {
  alternatingCharacters,
};
