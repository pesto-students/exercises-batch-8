
function daysInMonth(year, month) {
  const givenMonth = new Date(year, month, 0);
  const lastDateOfGivenMonth = givenMonth.getDate();

  return lastDateOfGivenMonth;
}

export {
  daysInMonth,
};
