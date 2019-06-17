
function bind(func, object, ...args) {
  return func.bind(object, ...args);
}

export {
  bind,
};
