
function repeatStringNumTimes(string, numOfRepititions) {
  if (numOfRepititions < 0) {
    return '';
  }

  let repeatedString = '';
  for (let i = 0; i < numOfRepititions; i += 1) {
    repeatedString += string;
  }
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
