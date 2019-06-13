
function repeatStringNumTimes(string, times) {
  if (times < 0) {
    return '';
  }else if (times === 1) {
    return string;
  } else {
    return string + repeatStringNumTimes(string, times - 1);
  }

}

export {
  repeatStringNumTimes,
};
