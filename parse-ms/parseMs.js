const msToUnits = {
  milliseconds: 1,
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  days: 1000 * 60 * 60 * 24,
};

function parseMs(ms) {
  let copyMs = Math.abs(ms);
  let negativeFlag = 1;
  if (ms < 0) {
    negativeFlag = -1;
  }
  const parsedMs = {};
  Object.keys(msToUnits).reverse().map((unit) => {
    if (copyMs > msToUnits[unit]) {
      const amountOfUnits = Math.floor(copyMs / msToUnits[unit]);
      parsedMs[unit] = negativeFlag * amountOfUnits;
      copyMs -= amountOfUnits * msToUnits[unit];
    } else {
      parsedMs[unit] = negativeFlag * 0;
    }
    return unit;
  });
  return parsedMs;
}

export {
  parseMs,
};
