
function sleep(timeInMS) {
  return new Promise(resolve => setTimeout(resolve, timeInMS));
}

export {
  sleep,
};
