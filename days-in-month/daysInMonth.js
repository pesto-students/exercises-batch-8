function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function isOdd(num) {
  // eslint-disable-next-line no-bitwise
  return Boolean(num & 1);
}


function daysInMonth(year, month) {
  // handle february case first
  if (month === 2) {
    if (isLeapYear(year)) {
      return 29;
    }
    return 28;
  }

  if (month < 8) {
    if (isOdd(month)) {
      return 31;
    }
    return 30;
  }

  if (isOdd(month)) {
    return 30;
  }
  return 31;
}

export {
  daysInMonth,
};
