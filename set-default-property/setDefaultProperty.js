function setDefaultProperty(object, defaultValue) {
  const handler = {
    get: (target, prop) => {
      // need to use in, which also checks the property from parent
      if (!(prop in target)) {
        return defaultValue;
      }
      return Reflect.get(target, prop);
    },
  };
  return new Proxy(object, handler);
}

export { setDefaultProperty };
