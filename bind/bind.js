
function bind(fn, obj, ...argsOuter) {
  return (...argsInner) => {
    const boundedFn = fn.bind(obj);
    return boundedFn(...argsOuter, ...argsInner);
  };
}

export {
  bind,
};
