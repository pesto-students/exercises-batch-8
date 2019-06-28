
function sleepPromise(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

function sleep(delay) {
  const newSleepPromise = sleepPromise(delay);

  function functionThen(value) {
    return newSleepPromise.then(() => value);
  }

  functionThen.then = args => newSleepPromise.then(args);
  functionThen.catch = Promise.resolve().catch;
  return functionThen;
}

export {
  sleep,
};
