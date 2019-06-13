
function memoize(func) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!Object.prototype.hasOwnProperty.call(cache, key)) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
}

export {
  memoize,
};
