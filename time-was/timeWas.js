/* eslint-disable guard-for-in */
const timeInMs = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 4 * 7 * 24 * 60 * 60 * 1000,
  year: 12 * 4 * 7 * 24 * 60 * 60 * 1000,
};

const NOW = 1516816290;


function timeWas(oldTime) {
  const timeDelta = NOW - oldTime;
  let relevantTimePeriod = 'millisecond';

  for (const timePeriod in timeInMs) {
    console.log(timePeriod, timeInMs[timePeriod], timeDelta);
    if (timeInMs[timePeriod] < timeDelta) {
      relevantTimePeriod = timePeriod;
    }
  }
  const timePassed = parseInt(timeDelta / timeInMs[relevantTimePeriod], 10);
  if (relevantTimePeriod === 'millisecond') {
    return 'just now';
  }
  if (timePassed === 1) {
    return `${timePassed} ${relevantTimePeriod} ago`;
  }
  return `${timePassed} ${relevantTimePeriod}s ago`;
}

export { timeWas };
