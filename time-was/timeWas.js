const orderedUnits = [
  {
    unitName: 'second',
    maxValue: 60,
    divisor: 1,
  },
  {
    unitName: 'minute',
    maxValue: 60,
    divisor: 60,
  },
  {
    unitName: 'hour',
    maxValue: 24,
    divisor: 60 * 60,
  },
  {
    unitName: 'day',
    maxValue: 7,
    divisor: 60 * 60 * 24,
  },
  {
    unitName: 'week',
    maxValue: 5,
    divisor: 60 * 60 * 24 * 7,
  },
  {
    unitName: 'month',
    maxValue: 12,
    divisor: 60 * 60 * 24 * 30,
  },
  {
    unitName: 'year',
    maxValue: null,
    divisor: 60 * 60 * 24 * 365,
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
