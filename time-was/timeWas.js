
function timeWas(timeToCompare, newNow) {
  const NOW = 1516816290;
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  const timeDifference = newNow ? (newNow - timeToCompare) : (NOW - timeToCompare);

  if (timeDifference < MINUTES) {
    const seconds = timeDifference / SECONDS;
    if (seconds <= 1) {
      return 'just now';
    }
    return `${seconds} seconds ago`;
  }

  if (timeDifference < HOURS) {
    const minutes = timeDifference / MINUTES;
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }

  if (timeDifference < DAYS) {
    const hours = timeDifference / HOURS;
    return `${hours} hours ago`;
  }

  if (timeDifference < WEEKS) {
    const days = timeDifference / DAYS;
    return `${days} days ago`;
  }

  if (timeDifference < MONTHS) {
    const weeks = timeDifference / WEEKS;
    return `${weeks} weeks ago`;
  }

  if (timeDifference < YEARS) {
    const months = timeDifference / MONTHS;
    return `${months} months ago`;
  }

  const years = timeDifference / YEARS;
  return `${years} years ago`;
}

export {
  timeWas,
};
