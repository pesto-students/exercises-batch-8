function shouldHandleProperty(string) {
  return !Number.isNaN(Number(string));
}

function negativeIndex(maybeArray) {
  if (!(maybeArray instanceof Array)) {
    throw new TypeError('Only arrays are supported');
  }
  const handler = {
    get: (array, prop) => {
      if (typeof prop === 'symbol') {
        return Reflect.get(array, prop);
      }
      if (shouldHandleProperty(prop)) {
        const index = Number(prop);
        if (index < 0) {
          return Reflect.get(array, array.length + index);
        }
      }
      return Reflect.get(array, prop);
    },
    set: (array, prop, value) => {
      if (typeof prop === 'symbol') {
        return Reflect.set(array, prop, value);
      }
      if (shouldHandleProperty(prop)) {
        const index = Number(prop);
        if (index < 0) {
          return Reflect.set(array, array.length + index, value);
        }
      }
      return Reflect.set(array, prop, value);
    },
  };

  return new Proxy(maybeArray, handler);
}

export { negativeIndex };
