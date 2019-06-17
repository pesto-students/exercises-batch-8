
// WIP
function isPromise(...args) {
  const prom = new Promise(() => {});
  if (args[0] instanceof Promise) {
    return true;
  }
  return (Promise.resolve(args[0]) === prom);
}

export {
  isPromise,
};
