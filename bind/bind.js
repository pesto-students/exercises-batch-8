
function bind(func, bindTo, ...rest) {
  return func.bind(bindTo, ...rest);
}

export {
  bind,
};
