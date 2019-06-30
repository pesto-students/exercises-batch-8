function privateProps(originalObject, privacyFilter) {
  const handler = {
    get(target, property) {
      if (privacyFilter(property)) {
        const error = new Error(`Property ${property} is private.`);
        throw error;
      }
      if (typeof target[property] === 'object') {
        return new Proxy(target[property], handler);
      }
      if (typeof target[property] === 'function') {
        return target[property].bind(target);
      }
      return Reflect.get(target, property);
    },
    set(target, property, value) {
      if (privacyFilter(property)) {
        const error = new TypeError(/Can't set property "_private"/);
        throw error;
      }
      // target[property] = value;
      return Reflect.set(target, property, value);
    },
    has(target, property) {
      if (privacyFilter(property)) {
        return false;
      }
      return Reflect.get(target, property);
    },
    ownKeys(target) {
      const keys = Reflect.ownKeys(target);
      return keys.filter(key => !privacyFilter(key));
    },
  };
  return new Proxy(originalObject, handler);
}

export {
  privateProps,
}