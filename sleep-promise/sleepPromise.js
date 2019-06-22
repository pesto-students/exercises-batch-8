function sleep(time) {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

  // handle when sleep function called in promise chain
  const sleepPromiseTheneableFunction = value => sleepPromise.then(() => value);

  // handle when sleep is called as normal promise
  sleepPromiseTheneableFunction.then = (resolve, reject) => sleepPromise.then(resolve, reject);

  return sleepPromiseTheneableFunction;
}

export { sleep };
