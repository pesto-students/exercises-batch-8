
function onChange(objToWatch, onChangeFunction) {
  const handler = {
    get(target, prop) {
      onChangeFunction();
      if (typeof target[prop] === 'function' && prop === 'sort') {
        onChangeFunction();
      }
      return new Proxy(target[prop], handler);
    },
    set(target, prop) {
      onChangeFunction();
      return Reflect.set(target, prop);
    },
  };
  return new Proxy(objToWatch, handler);
}

export {
  onChange,
};
