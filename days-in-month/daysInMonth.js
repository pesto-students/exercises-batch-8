
function daysInMonth(year, month) {
  // As the date 0 signifies last date of previous month
  return new Date(year, month, 0).getDate();
}

export {
  daysInMonth,
};
