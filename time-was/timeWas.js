
function timeWas(givenTime) {
  const NOW = 1516816290;
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;
  const passedMilliSeconds = NOW - givenTime;
  if (Math.round(passedMilliSeconds / YEARS) > 0) {
    return `${Math.round(passedMilliSeconds / YEARS)} years ago`;
  } if (Math.round(passedMilliSeconds / MONTHS) > 0) {
    return `${Math.round(passedMilliSeconds / MONTHS)} months ago`;
  } if (Math.round(passedMilliSeconds / WEEKS) > 0) {
    return `${Math.round(passedMilliSeconds / WEEKS)} weeks ago`;
  } if (Math.round(passedMilliSeconds / DAYS) > 0) {
    return `${Math.round(passedMilliSeconds / DAYS)} days ago`;
  } if (Math.round(passedMilliSeconds / HOURS) > 0) {
    return `${Math.round(passedMilliSeconds / HOURS)} hours ago`;
  } if (Math.round(passedMilliSeconds / MINUTES) > 0) {
    return `${Math.round(passedMilliSeconds / MINUTES)} minutes ago`;
  } if (Math.round(passedMilliSeconds / SECONDS) > 0) {
    return `${Math.round(passedMilliSeconds / SECONDS)} seconds ago`;
  }
  return '';
}

export {
  timeWas,
};
