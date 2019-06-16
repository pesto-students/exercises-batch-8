
function parseMs(milliseconds) {
  if (milliseconds < 0) {
    const positiveObj = parseMs(-milliseconds);
    return Object.keys(positiveObj).reduce((negativeObj, key) => {
      const newObj = {
        ...negativeObj,
      };
      newObj[key] = -positiveObj[key];
      return newObj;
    }, {});
  }
  const obj = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds,
  };
  obj.seconds = Math.floor(obj.milliseconds / 1000);
  obj.milliseconds %= 1000;
  obj.minutes = Math.floor(obj.seconds / 60);
  obj.seconds %= 60;
  obj.hours = Math.floor(obj.minutes / 60);
  obj.minutes %= 60;
  obj.days = Math.floor(obj.hours / 24);
  obj.hours %= 24;
  return obj;
}

export {
  parseMs,
};
