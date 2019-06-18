
async function sleep(sleepDuration) {
  return new Promise(() => { setTimeout(() => { }, sleepDuration); });
}
export {
  sleep,
};
