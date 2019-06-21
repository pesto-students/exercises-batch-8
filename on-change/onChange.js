//  wip
/* eslint-disable no-param-reassign */
function onChange(object, func) {
  const handler = {
    set(target, prop, value) {
      target[prop] = value;
      func();
      return true;
    },
    defineProperty(target, prop, value) {
      target[prop] = value;
      func();
      return true;
    },
    deleteProperty(target, prop) {
      delete target[prop];
      func();
      return true;
    },
  };

  return new Proxy(object, handler);
}

export { onChange };
