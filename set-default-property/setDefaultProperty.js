
function setDefaultProperty(obj, defaultValue) {
  const handler = {
    get(target, prop) {
      if (Object.prototype.hasOwnProperty.call(target, prop)) {
        return target[prop];
      }
      return defaultValue;
    },
  };
  return new Proxy(obj, handler);
}

export {
  setDefaultProperty,
};
