
function timeWas(givenTime, now) {
  const NOW = 1516816290;
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;
  const passedMilliSeconds = Number.isInteger(now) ? (now - givenTime) : (NOW - givenTime);
  if (Math.floor(passedMilliSeconds / YEARS) > 0) {
    const years = Math.floor(passedMilliSeconds / YEARS);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } if (Math.floor(passedMilliSeconds / MONTHS) > 0) {
    const months = Math.floor(passedMilliSeconds / MONTHS);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } if (Math.floor(passedMilliSeconds / WEEKS) > 0) {
    const weeks = Math.floor(passedMilliSeconds / WEEKS);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } if (Math.floor(passedMilliSeconds / DAYS) > 0) {
    const days = Math.floor(passedMilliSeconds / DAYS);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } if (Math.floor(passedMilliSeconds / HOURS) > 0) {
    const hours = Math.floor(passedMilliSeconds / HOURS);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } if (Math.floor(passedMilliSeconds / MINUTES) > 0) {
    const minutes = Math.floor(passedMilliSeconds / MINUTES);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } if (Math.floor(passedMilliSeconds / SECONDS) > 0) {
    const seconds = Math.floor(passedMilliSeconds / SECONDS);
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  } if (passedMilliSeconds >= 0 && passedMilliSeconds < 5) {
    return 'just now';
  }
  return '';
}

export {
  timeWas,
};
