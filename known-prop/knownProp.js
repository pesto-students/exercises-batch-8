
function knownProp(object) {
  return new Proxy(object, {
    get(target, key) {
      // if (target.hasOwnProperty(key)) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        return target[key];
      }
      throw new TypeError(`Unknown property: ${key}`);
    },
  });
}

export {
  knownProp,
};
