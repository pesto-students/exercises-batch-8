
function repeatStringNumTimes(string, times) {
  return times >= 0 ? String(string).repeat(times) : '';
}

export {
  repeatStringNumTimes,
};
