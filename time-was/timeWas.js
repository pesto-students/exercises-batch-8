const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * 60;
const SECONDS_IN_DAY = 60 * 60 * 24;
const SECONDS_IN_WEEK = 60 * 60 * 24 * 7;
const SECONDS_IN_MONTH = 60 * 60 * 24 * 30;
const SECONDS_IN_YEAR = 60 * 60 * 24 * 365;


const orderedUnits = [
  {
    unitName: 'second',
    maxValue: 60,
    divisor: 1,
  },
  {
    unitName: 'minute',
    maxValue: 60,
    divisor: SECONDS_IN_MINUTE,
  },
  {
    unitName: 'hour',
    maxValue: 24,
    divisor: SECONDS_IN_HOUR,
  },
  {
    unitName: 'day',
    maxValue: 7,
    divisor: SECONDS_IN_DAY,
  },
  {
    unitName: 'week',
    maxValue: 5,
    divisor: SECONDS_IN_WEEK,
  },
  {
    unitName: 'month',
    maxValue: 12,
    divisor: SECONDS_IN_MONTH,
  },
  {
    unitName: 'year',
    maxValue: null,
    divisor: SECONDS_IN_YEAR,
  },
];

function formatTimeString(timeDifference, unitName) {
  if (timeDifference) {
    return `${timeDifference} ${unitName}${timeDifference > 1 ? 's' : ''} ago`;
  }
  return 'just now';
}

function timeWas(time, originTime) {
  const now = originTime || Date.now();
  const timeDifferenceInSeconds = (now - time) / 1000;

  if (timeDifferenceInSeconds < 1) {
    return formatTimeString();
  }

  for (const unit of orderedUnits) {
    const valueInUnit = Number(timeDifferenceInSeconds / unit.divisor).toFixed();

    if (unit.maxValue === null || valueInUnit < unit.maxValue) {
      return formatTimeString(valueInUnit, unit.unitName);
    }
  }

  return undefined;
}

export {
  timeWas,
};
