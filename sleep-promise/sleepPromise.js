const sleep = (time) => {
  const timeOutPromise = new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  return timeOutPromise;
};

function sleepPromise(...args) {
  return args;
}

export {
  sleepPromise,
  sleep,
};
