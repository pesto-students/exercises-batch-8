
function cacheFunction(fn) {
  // eslint-disable-next-line prefer-const
  let cache = {};
  return (args) => {
    let result;
    if (args in cache) {
      result = cache[args];
    } else {
      result = fn(args);
      cache[args] = result;
    }
    return result;
  };
}

export {
  cacheFunction,
};
