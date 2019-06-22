const MILLIS_IN_DAY = 86400000;
const MILLIS_IN_HOUR = 3600000;
const MILLIS_IN_MINUTE = 60000;
const MILLIS_IN_SECOND = 1000;

const getDays = milliseconds => ({
  days: Math.floor(milliseconds / MILLIS_IN_DAY),
  daysRemainingMs: milliseconds % MILLIS_IN_DAY,
});
const getHours = milliseconds => ({
  hours: Math.floor(milliseconds / MILLIS_IN_HOUR),
  hoursRemainingMs: milliseconds % MILLIS_IN_HOUR,
});
const getMinutes = milliseconds => ({
  minutes: Math.floor(milliseconds / MILLIS_IN_MINUTE),
  minutesRemainingMs: milliseconds % MILLIS_IN_MINUTE,
});
const getSeconds = milliseconds => ({
  seconds: Math.floor(milliseconds / MILLIS_IN_SECOND),
  secondsRemainingMs: milliseconds % MILLIS_IN_SECOND,
});


function parseMs(ms) {
  const isNegetive = ms < 0;
  const msCopy = isNegetive ? -1 * ms : ms;
  const { days, daysRemainingMs } = getDays(msCopy);
  const { hours, hoursRemainingMs } = getHours(daysRemainingMs);
  const { minutes, minutesRemainingMs } = getMinutes(hoursRemainingMs);
  const { seconds, secondsRemainingMs } = getSeconds(minutesRemainingMs);
  const milliseconds = secondsRemainingMs;
  const parsedObject = {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
  if (isNegetive) {
    return Object.keys(parsedObject)
      .reduce((acc, key) => ({ ...acc, [key]: parsedObject[key] * -1 }), {});
  }
  return parsedObject;
}

export {
  parseMs,
};
