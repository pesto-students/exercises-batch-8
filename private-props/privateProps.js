function privateProps(object, propertyFilter) {
  const handler = {
    // Property wont be visible, but can be accessed through _private as we can distinguish,
    // if called from method or direct.
    get: (target, prop) => Reflect.get(target, prop),
    set: (target, prop, value) => {
      if (propertyFilter(prop)) {
        throw new TypeError('Can\'t set property "_private"');
      }
      return Reflect.set(target, prop, value);
    },
    has: (target, prop) => {
      if (propertyFilter(prop)) {
        return false;
      }
      return Reflect.has(target, prop);
    },
    ownKeys: target => Reflect.ownKeys(target).filter(key => !propertyFilter(key)),
  };
  return new Proxy(object, handler);
}

export { privateProps };
