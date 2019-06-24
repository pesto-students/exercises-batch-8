
function knownProp(obj) {
  const handler = {
    get(target, property) {
      if (property in target) {
        return Reflect.get(target, property);
      }
      throw new TypeError('No such property exists');
    },
  };
  return new Proxy(obj, handler);
}

export {
  knownProp,
};
