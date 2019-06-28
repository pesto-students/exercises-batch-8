
function cacheFunction(fn) {
  const cache = {};
  const cacheFunc = (...args) => {
    const key = JSON.stringify(args);
    if (!hasOwnProperty.call(cache, key)) {
      cache[key] = fn.apply(this, args);
    }
    return cache[key];
  };
  return cacheFunc;
}

export {
  cacheFunction,
};
