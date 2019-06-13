
function repeatStringNumTimes(string, repeatations) {
  let noOfRepetations = repeatations;
  let resultString = '';
  while (noOfRepetations > 0) {
    resultString += string;
    noOfRepetations -= 1;
  }
  return resultString;
}

export {
  repeatStringNumTimes,
};
