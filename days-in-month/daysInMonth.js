const numberOfDaysInMonth = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function daysInMonth(year, month) {
  if (year % 4 === 0 && month === 2) {
    return 29;
  }
  return numberOfDaysInMonth[month];
}

export {
  daysInMonth,
};
