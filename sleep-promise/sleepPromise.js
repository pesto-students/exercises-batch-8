function sleep(delay) {
  const sleepPromise = new Promise((resolve, reject) => setTimeout(resolve, delay));

  const promisifyFunction = value => sleepPromise.then(() => value);
  promisifyFunction.then = (...rest) => sleepPromise.then(...rest);
  promisifyFunction.catch = error => sleepPromise.catch(error);

  return promisifyFunction;
}

export {
  sleep,
};