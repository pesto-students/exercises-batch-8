
function onChange(objToWatch, onChangeFunction) {
  const handler = {
    get(target, prop) {
      try {
        if (typeof target[prop] === 'function' && prop === 'sort') {
          onChangeFunction();
        }
        return new Proxy(target[prop], handler);
      } catch (e) {
        return Reflect.get(target, prop);
      }
    },
    set(target, prop, value) {
      onChangeFunction();
      return Reflect.set(target, prop, value);
    },
    defineProperty(target, prop, descriptor) {
      onChangeFunction();
      return Reflect.defineProperty(target, prop, descriptor);
    },
    deleteProperty(target, prop) {
      onChangeFunction();
      return Reflect.deleteProperty(target, prop);
    },

  };
  return new Proxy(objToWatch, handler);
}

export {
  onChange,
};
