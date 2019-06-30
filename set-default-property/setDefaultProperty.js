function setDefaultProperty(originalObject, value) {
  const handler = {
    get(target, property) {
      return Object.prototype.hasOwnProperty.call(target, property) ? target[property] : value;
    },
  };
  return new Proxy(originalObject, handler);
}
export {
  setDefaultProperty,
};
