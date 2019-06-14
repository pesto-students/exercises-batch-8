
const YEAR = {
  JAN: 31,
  FEB: 28,
  MAR: 31,
  APR: 30,
  MAY: 31,
  JUNE: 30,
  JULY: 31,
  AUG: 31,
  SEP: 30,
  OCT: 31,
  NOV: 30,
  DEC: 31,
};

function daysInMonth(year, month) {
    const isLeapYear = year % 4 === 0;
    const isFebruary = month => month === YEAR.FEB;
    return isLeapYear && isFebruary ? 29 : normalYear[month];
}

export {
  daysInMonth,
};
