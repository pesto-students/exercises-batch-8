
function sleep(time) {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  const sleepPromiseThennableFunction = value => sleepPromise.then(() => value);
  sleepPromiseThennableFunction.then = value => sleepPromise.then(value);
  return sleepPromiseThennableFunction;
}

export {
  sleep,
};
