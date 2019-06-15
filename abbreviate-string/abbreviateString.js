
function abbreviateString(string) {
  if (typeof string !== 'string') {
    throw new Error('Input is not a string');
  }
  const words = string.split(' ');
  return `${words[0]} ${words[words.length - 1][0].toUpperCase()}.`;
}

export {
  abbreviateString,
};
