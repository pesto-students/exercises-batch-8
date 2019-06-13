
function repeatStringNumTimes(str, count) {
  if (count <= 0) {
    return '';
  }
  let repeatedString = '';
  for (let i = 0; i < count; i += 1) {
    repeatedString += str;
  }
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
