function setDefaultProperty(object, defaultValue) {
  const handler = {
    get(target, prop) {
      if (Object.hasOwnProperty.call(target, prop)) {
        return target[prop];
      }
      return defaultValue;
    },
  };

  return new Proxy(object, handler);
}

export { setDefaultProperty };
