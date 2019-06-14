/* eslint-disable no-undef */
const checkLeapYear = year => (
  year % 100 !== 0
  && year % 4 === 0
) || (year % 100 === 0 && year % 400 === 0);

const has31days = (month <= 6 && month % 2 === 1)
|| (month > 6 && month % 2 === 0);

function daysInMonth(year, month) {
  if (has31days) {
    return 31;
  }
  if (month === 2) {
    return checkLeapYear(year) ? 29 : 28;
  }
  return 30;
}

export {
  daysInMonth,
};
