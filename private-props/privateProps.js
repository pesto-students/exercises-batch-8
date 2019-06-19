
function privateProps(obj, isPrivate) {
  const handler = {
    has: (object, property) => {
      if (isPrivate(property)) {
        return false;
      }
      return property in object;
    },
    set: (object, property, value) => {
      if (isPrivate(property)) {
        throw new TypeError(/Can't set property "_private"/);
      }
      // eslint-disable-next-line no-param-reassign
      object[property] = value;
      return true;
    },
    ownKeys: (object) => {
      Object.keys(object).filter(key => !isPrivate(key));
    },
  };
  return new Proxy(obj, handler);
}

export {
  privateProps,
};
