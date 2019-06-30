
function onChange(originalObject, func) {
  const handler = {
    get(target, property) {
      try {
        if (typeof target[property] === 'function' && property === 'sort') {
          func();
        }
        return new Proxy(originalObject[property], handler);
      } catch (error) {
        return Reflect.get(target, property);
      }
    },
    set(target, property, value) {
      func();
      return Reflect.set(target, property, value);
    },
    defineProperty(target, property, attributes) {
      func();
      return Reflect.defineProperty(target, property, attributes);
    },
    deleteProperty(target, property) {
      func();
      return Reflect.deleteProperty(target, property);
    },
  };
  return new Proxy(originalObject, handler);
}

export {
  onChange,
}