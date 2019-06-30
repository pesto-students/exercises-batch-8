const calculateDeletionCount = (string) => {
  const chars = string.split('');
  let count = 0;
  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === chars[i + 1]) {
      count += 1;
    }
  }
  return count;
};

function alternatingCharacters(strings) {
  return strings.map(string => calculateDeletionCount(string));
}

export {
  alternatingCharacters,
};
