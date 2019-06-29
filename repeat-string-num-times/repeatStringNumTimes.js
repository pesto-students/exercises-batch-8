function repeatStringNumTimes(str, times) {
  if (times < 0) {
    return '';
  }
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  }
  return result;
}

export {
  repeatStringNumTimes,
};
