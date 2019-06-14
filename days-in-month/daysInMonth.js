
function daysInMonth(year, month) {
  const monthYearRepresentation = new Date(year, month, 0);
  return monthYearRepresentation.getDate();
}

export {
  daysInMonth,
};
