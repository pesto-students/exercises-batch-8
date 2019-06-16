
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return '';
  }
  return [...Array(num).keys()].map(() => str).join('');
}

export {
  repeatStringNumTimes,
};
