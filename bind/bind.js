
function bind(func, obj, ...args) {
  return (...moreArgs) => func.call(obj, ...args, ...moreArgs);
}

export {
  bind,
};
