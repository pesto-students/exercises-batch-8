
function sleep(sleepDuration) {
  return new Promise(resolve => setTimeout(resolve, sleepDuration));
  //  .then(result => result);
}

export {
  sleep,
};
