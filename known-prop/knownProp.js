
const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    throw new TypeError('Key not present in the Object');
  },
};

function knownProp(obj) {
  return new Proxy(obj, handler);
}

export {
  knownProp,
};
