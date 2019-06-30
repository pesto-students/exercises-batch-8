const MILLI_SECONDS_IN_SECOND = 1000;
const MILLI_SECONDS_IN_MINUTE = 1000 * 60;
const MILLI_SECONDS_IN_HOUR = 1000 * 60 * 60;
const MILLI_SECONDS_IN_DAY = 1000 * 60 * 60 * 24;


const orderedUnits = [
  {
    unitName: 'days',
    divisor: MILLI_SECONDS_IN_DAY,
  },
  {
    unitName: 'hours',
    divisor: MILLI_SECONDS_IN_HOUR,
  },
  {
    unitName: 'minutes',
    divisor: MILLI_SECONDS_IN_MINUTE,
  },
  {
    unitName: 'seconds',
    divisor: MILLI_SECONDS_IN_SECOND,
  },
  {
    unitName: 'milliseconds',
    divisor: 1,
  },
];

function parseMs(time) {
  const result = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  let remainingMiliSeconds = Math.abs(time);

  for (const unit of orderedUnits) {
    const valueInUnit = Number.parseInt(remainingMiliSeconds / unit.divisor, 10);
    if (time < 0) {
      result[unit.unitName] = -valueInUnit;
    } else {
      result[unit.unitName] = valueInUnit;
    }
    remainingMiliSeconds %= unit.divisor;
  }

  return result;
}
export {
  parseMs,
};
