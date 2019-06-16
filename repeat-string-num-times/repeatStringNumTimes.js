
function repeatStringNumTimes(str, repetitionValue) {
  if (repetitionValue < 0) {
    return '';
  }
  return str.repeat(repetitionValue);
}

export {
  repeatStringNumTimes,
};
