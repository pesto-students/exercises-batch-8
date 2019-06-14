
function abbreviateString(string) {
  const splittedString = string.split(' ');
  return `${splittedString[0]} ${splittedString[splittedString.length - 1][0].toUpperCase()}.`;
}

export {
  abbreviateString,
};
