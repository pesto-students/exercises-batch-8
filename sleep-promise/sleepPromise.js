
function sleep(timeInMS) {
  const sleepPromise = new Promise(resolve => setTimeout(resolve, timeInMS));

  const promiseFunction = value => sleepPromise.then(() => value);
  promiseFunction.then = (...args) => sleepPromise.then(...args);
  promiseFunction.catch = Promise.resolve().catch;

  return promiseFunction;
}

export {
  sleep,
};
