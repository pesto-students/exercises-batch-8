const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = DAYS * 30;
const YEARS = MONTHS * 12;

const timeWasData = {
  [YEARS]: 'year',
  [MONTHS]: 'month',
  [WEEKS]: 'week',
  [DAYS]: 'day',
  [HOURS]: 'hour',
  [MINUTES]: 'minute',
  [SECONDS]: 'second',
};

function timeWas(timestamp, NOW) {
  const currentTimestamp = NOW === undefined ? Date.now() : NOW;
  const difference = currentTimestamp - timestamp;
  const applicableTimeUnits = Object.keys(timeWasData).filter(key => key <= difference);
  if (applicableTimeUnits.length === 0) {
    return 'just now';
  }
  const displayTimeUnit = applicableTimeUnits[applicableTimeUnits.length - 1];
  const unitCount = difference / displayTimeUnit;
  const pluralCharacter = unitCount > 1 ? 's' : '';
  const displayUnitText = `${unitCount} ${timeWasData[displayTimeUnit]}${pluralCharacter} ago`;
  return displayUnitText;
}

export {
  timeWas,
};
