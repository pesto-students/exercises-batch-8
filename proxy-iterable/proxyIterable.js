function proxyIterable(object) {
  const handler = {
    get: (target, prop) => {
      if (typeof prop === 'symbol') {
        return Reflect.get(target, prop);
      }
      if (typeof target[0][prop] === 'function') {
        return arg => target.map((element, index) => {
          if (typeof target[index][prop] !== 'function') {
            throw new Error(`Item ${index + 1} of the iterable is missing the ${prop}() method`);
          }
          return element[prop](arg);
        });
      }
      return Reflect.get(target, prop);
    },
  };
  return new Proxy(object, handler);
}

export { proxyIterable };
