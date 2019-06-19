function onChange(object, changeHandler) {
  const handler = {
    set(target, key, value) {
      // eslint-disable-next-line no-param-reassign
      target[key] = value;
      changeHandler();
      return target;
    },
    defineProperty(target, key, descriptor) {
      Object.defineProperty(target, key, descriptor);
      changeHandler();
      return target;
    },
    deleteProperty(target, key) {
      if (key in target) {
        // eslint-disable-next-line no-param-reassign
        delete target[key];
        changeHandler();
      }
      return target;
    },
  };
  return new Proxy(object, handler);
}

export {
  onChange,
};
