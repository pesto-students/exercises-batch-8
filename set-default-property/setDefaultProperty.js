
function setDefaultProperty(actualObj, defaultValue) {
  const defaultHandler = {
    get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }
      return defaultValue;
    },
  };
  return new Proxy(actualObj, defaultHandler);
}

export {
  setDefaultProperty,
};
