
function knownProp(object) {
  const handler = {
    get: (obj, prop) => {
      if (prop in obj) {
        return obj[prop];
      }
      throw new TypeError('Unknown property');
    },
  };
  const knowPropertyProxy = new Proxy(object, handler);
  return knowPropertyProxy;
}

export {
  knownProp,
};
