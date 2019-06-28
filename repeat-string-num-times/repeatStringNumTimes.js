
function repeatStringNumTimes(string, repeatTimes) {
  if (repeatTimes < 0) {
    return '';
  }
  return string.repeat(repeatTimes);
}

export {
  repeatStringNumTimes,
};
