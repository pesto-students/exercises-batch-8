const cacheFunction = (cb) => {
  const cache = new Map();
  return (...args) => {
    const serializedArgs = JSON.stringify(args);
    if (cache.has(serializedArgs)) {
      return cache.get(serializedArgs);
    }

    const result = cb(...args);
    cache.set(serializedArgs, result);
    return result;
  };
};

export {
  cacheFunction,
};
