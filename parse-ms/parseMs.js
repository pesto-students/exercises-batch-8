const Millisec_In_Day = 86400000;
const Millisec_In_Hour = 3600000;
const Millisec_In_Minute = 60000;
const Millisec_In_Second = 1000;

function parseMs(args) {
  const result = {};
  result.days = Math.floor(args / Millisec_In_Day);
  result.hours = Math.floor((args / Millisec_In_Hour) % 24);
  result.minutes = Math.floor((args / Millisec_In_Minute) % 60);
  result.seconds = Math.floor((args / Millisec_In_Second) % 60);
  result.milliseconds = Math.floor(args % 1000);
  if (args < 0) {
    return Object.keys(result).reduce((obj, key) => ({ ...obj, [key]: result[key] * -1 }), {});
  }
  return result;
}


export { parseMs };
