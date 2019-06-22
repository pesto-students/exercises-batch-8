
function privateProps(obj, privacyFilter) {
  const handler = {
    get(target, prop) {
      if (privacyFilter(prop)) {
        throw new Error(`Property ${prop} is private`);
      }
      if (typeof target[prop] === 'object') {
        return new Proxy(target[prop], handler);
      }
      if (typeof target[prop] === 'function') {
        return target[prop].bind(target);
      }
      // return target[prop];
      return Reflect.get(target, prop);
    },
    set(target, propName, value) {
      if (privacyFilter(propName)) {
        throw new TypeError(/Can't set property "_private"/);
      }
      return Reflect.set(target, propName, value);
    },
    has(target, prop) {
      if (privacyFilter(prop)) {
        return false;
      }
      return Reflect.has(target, prop);
    },
    ownKeys(target) {
      const keys = Reflect.ownKeys(target);
      return keys.filter(key => !privacyFilter(key));
    },
  };
  return new Proxy(obj, handler);
}

export {
  privateProps,
};
