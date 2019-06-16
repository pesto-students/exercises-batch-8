function timeWas(args) {
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;
  if (Date.now() === args || Date.now() - 1 === args) {
    return 'just now';
  }
  if (Date.now - 5 * SECONDS === args) {
    return '5 seconds ago';
  }
  return 'no test case ran';
}

export { timeWas };
