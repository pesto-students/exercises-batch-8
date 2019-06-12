
function cacheFunction(func) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
}

export {
  cacheFunction,
};
