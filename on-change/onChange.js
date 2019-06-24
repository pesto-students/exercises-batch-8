
function onChange(obj, callFunction) {
  const handler = {
    get(target, prop) {
      if (typeof target[prop] === 'object') {
        return new Proxy(target[prop], handler);
      }
      return Reflect.get(target, prop, handler);
    },
    set(target, prop, value) {
      callFunction();
      return Reflect.set(target, prop, value);
    },
    defineProperty(...args) {
      callFunction();
      return Reflect.defineProperty(...args);
    },
    deleteProperty(...args) {
      callFunction();
      return Reflect.deleteProperty(...args);
    },
  };
  return new Proxy(obj, handler);
}

export {
  onChange,
};
