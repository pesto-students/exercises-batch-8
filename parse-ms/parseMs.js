/* eslint-disable no-param-reassign */
// const isNegetive = timeInMS => timeInMS < 0;

function parseMs(timeInMS) {
  // timeInMS *= Math.sign(timeInMS);
  // const seconds = Math.floor(timeInMS / 1000) % 60;
  // const minutes = Math.floor(seconds / 60) % 60;
  // const hours = Math.floor(minutes / 60) % 24;
  // const days = Math.floor(hours / 24);
  // const milliseconds = Math.ceil(((timeInMS / 1000) - Math.floor(timeInMS / 1000)) * 1000);

  // return {
  //   days,
  //   hours,
  //   minutes,
  //   seconds,
  //   milliseconds,
  // };
  return timeInMS;
}

export {
  parseMs,
};
