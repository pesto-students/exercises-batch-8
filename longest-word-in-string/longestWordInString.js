
function longestWordInString(string) {
  const lengths = string.split(' ').map(str => str.length);
  return Math.max(...lengths);
}

export {
  longestWordInString,
};
