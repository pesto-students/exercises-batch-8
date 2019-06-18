
function daysInMonth(year, month) {
  const normalYear = {
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
  const isLeapYearFebruary = year % 4 === 0 && month === 2;
  return isLeapYearFebruary ? 29 : normalYear[month];
}

export {
  daysInMonth,
};
