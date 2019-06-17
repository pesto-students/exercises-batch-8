function cacheFunction(fn) {
  const cache = {};
  // eslint-disable-next-line func-names
  return function () {
    const key = JSON.stringify(...arguments); // eslint-disable-line
    if (Object.prototype.hasOwnProperty.call(cache, key)) {
      return cache[key];
    }
    const value = fn.apply(null, arguments); // eslint-disable-line
    cache[key] = value;
    return value;
  };
}

export { cacheFunction };
