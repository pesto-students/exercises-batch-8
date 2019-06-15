
function cacheFunction(cbFunc) {
  const cache = {};
  function cachingFunction(...args) {
    if (!Object.prototype.hasOwnProperty.call(cache, args)) {
      cache[args] = cbFunc(...args);
    }
    return cache[args];
  }
  return cachingFunction;
}

export {
  cacheFunction,
};
