
function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw TypeError;
  }
  const mainTokens = str.split(' ');
  return `${mainTokens[0]} ${mainTokens[mainTokens.length - 1].toUpperCase()[0]}.`;
}

export {
  abbreviateString,
};
