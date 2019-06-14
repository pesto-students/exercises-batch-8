const daysInMonthLookup = {
  1: 31,
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

function isLeapYear(year) {
  if (year % 100 === 0) {
    return year % 400 === 0;
  }
  return year % 4 === 0;
}

function isFeb(month) {
  return month === 2;
}

function daysInMonth(year, month) {
  if (isFeb(month)) {
    if (isLeapYear(year)) {
      return 29;
    }
    return 28;
  }
  return daysInMonthLookup[month];
}

export {
  daysInMonth,
};
