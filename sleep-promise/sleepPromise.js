function sleep(timeout) {
  const sleepPromise = new Promise((res) => {
    setTimeout(() => {
      res();
    }, timeout);
  });

  // Act as function, and pass value through when used in promise chain
  const promiseFunction = value => sleepPromise.then(() => value);

  // Normal promise
  promiseFunction.then = (...args) => sleepPromise.then(...args);
  promiseFunction.catch = Promise.resolve().catch;

  return promiseFunction;
}

export {
  sleep,
};
