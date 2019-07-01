function curry(fn, ...args) {
  const fnCurry = (params) => {
    if (params.length === fn.length) {
      return fn(...params);
    }
    return (...fnArgs) => fnCurry([...params, ...fnArgs]);
  };

  return fnCurry(args);
}

export {
  curry,
};
