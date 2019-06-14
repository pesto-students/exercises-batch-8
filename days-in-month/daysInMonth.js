
function daysInMonth(year, month) {
  // Date of last day of the given month
  const dateOfLastDay = new Date(year, month, 0);
  return dateOfLastDay.getDate();
}

export {
  daysInMonth,
};
