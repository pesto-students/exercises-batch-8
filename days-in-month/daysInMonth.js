function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function isEven(number) {
  return number % 2 === 0;
}

function daysInMonth(year, month) {
  if (month === 2) { // is February
    return isLeapYear(year) ? 29 : 28;
  }

  if (isEven(month)) {
    return 30;
  }
  return 31;
}

export {
  daysInMonth,
};
