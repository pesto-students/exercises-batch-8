function isLeap(year) {
  return (year % 100 !== 0 && year % 4 === 0)
    || (year % 100 === 0 && year % 400 === 0);
}

function daysInMonth(year, month) {
  if ((month <= 6 && month % 2 === 1)
    || (month > 6 && month % 2 === 0)) {
    return 31;
  }
  if (month === 2) {
    return isLeap(year) ? 29 : 28;
  }
  return 30;
}

export {
  daysInMonth,
};
