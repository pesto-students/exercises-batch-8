const timeInMs = {
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
  millisecond: 1,
};

// TODO: try using currying for the the ms and other parameters.
const reducer = (timeObj, currKey) => {
  const timeLeft = timeObj.ms;
  const negTime = timeObj.isNegativeTime;
  return ({
    ...timeObj,
    ms: timeLeft % timeInMs[currKey],
    [`${currKey}s`]: negTime * parseInt(timeLeft / timeInMs[currKey], 10),
  });
};

function parseMs(milliSeconds) {
  const isNegativeTime = milliSeconds < 0 ? -1 : 1;
  const ms = Math.abs(milliSeconds);
  const keys = Object.keys(timeInMs);
  const resultTime = keys.reduce(reducer, { ms, isNegativeTime });

  // Find better way to do this
  delete resultTime.ms;
  delete resultTime.isNegativeTime;

  return resultTime;
}

export {
  parseMs,
};
