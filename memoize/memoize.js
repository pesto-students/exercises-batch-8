
function memoize(fun) {
       const cache = {};
  return function(...args){
    const key = args.toString();
    if (cache[key] === undefined) {
      cache[key] = fun(...args);
    }
    return cache[key];
};
}

export {
  memoize,
};
