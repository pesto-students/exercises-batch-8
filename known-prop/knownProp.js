const handler = {
  get(target, property) {
    if (property in target) {
      return target[property];
    }
    const error = new TypeError(`Unknown property: ${property}`);
    throw error;
  },
};

function knownProp(originalObject) {
  return new Proxy(originalObject, handler);
}
export {
  knownProp,
};
