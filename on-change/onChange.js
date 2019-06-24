function onChange(object, callback) {
  const handler = {
    get: (target, prop) => {
      const getResult = Reflect.get(target, prop);
      callback();
      return getResult;
    },
    set: (target, prop, value) => {
      const setResult = Reflect.set(target, prop, value);
      callback();
      return setResult;
    },
    deleteProperty: (target, prop, value) => {
      callback();
      const deletePropertyResult = Reflect.deleteProperty(target, prop, value);
      return deletePropertyResult;
    },
    defineProperty: (target, prop, value) => {
      const definePropertyResult = Reflect.defineProperty(target, prop, value);
      callback();
      return definePropertyResult;
    },
  };
  return new Proxy(object, handler);
}

export { onChange };
