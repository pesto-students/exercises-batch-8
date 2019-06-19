
function setDefaultProperty(obj) {
  const handler = {
    get: (object, property) => {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(property)) {
        return object[property];
      }
      return 'defaultValue';
    },
  };
  return new Proxy(obj, handler);
}

export {
  setDefaultProperty,
};
