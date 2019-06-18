
 const cacheFunction = (fn) => {
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

export {
  cacheFunction,
};
