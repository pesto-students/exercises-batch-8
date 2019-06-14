
function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw TypeError;
  }
  const mainTokens = str
    .split(' ')
    .filter((token, index, arr) => index === 0 || index === arr.length - 1);
  return `${mainTokens[0]} ${mainTokens[1].toUpperCase()[0]}.`;
}

export {
  abbreviateString,
};
