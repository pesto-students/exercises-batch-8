function checkLeapYear(year) {
  if (year % 100 === 0) {
    return year % 400 === 0;
  }
  return year % 4 === 0;
}

function daysInMonth(year, month) {
  const leap = checkLeapYear(year);
  if (month === 2) {
    return leap ? 29 : 28;
  }
  if (month / 2) {
    return 30;
  }
  return 31;
}

export { daysInMonth };
