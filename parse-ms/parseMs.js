
function parseMs(miliSeconds) {
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  const timeConstants = {
    days: DAYS,
    hours: HOURS,
    minutes: MINUTES,
    seconds: SECONDS,
    milliseconds: 1,
  };

  const defaults = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };
  const valueHolder = {};

  let msToEvaluate = miliSeconds;

  const timeKeywords = Object.keys(defaults).reverse();
  for (const keyword of timeKeywords) {
    const keywordToMiliseconds = (keyword === 'miliseconds') ? 1 : timeConstants[keyword];

    if (msToEvaluate > keywordToMiliseconds) {
      const keywordValue = Math.floor(msToEvaluate / keywordToMiliseconds);
      defaults[keyword] = keywordValue;
      msToEvaluate -= keywordValue * keywordToMiliseconds;
    }
    // FIXME: Not working
    // console.log({ msToEvaluate, keywordToMiliseconds });
  }
  return defaults;
}

export {
  parseMs,
};
