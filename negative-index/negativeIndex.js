// wip

/* eslint-disable no-param-reassign */
function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }
  const handler = {
    get(target, prop) {
      if (prop < 0) {
        return target[Number(target.length) + Number(prop)];
      }
      return target[prop];
    },
    set(target, prop, value) {
      if (prop < 0) {
        target[Number(target.length) + Number(prop)] = value;
      }
      target[prop] = value;
      return true;
    },
  };
  return new Proxy(array, handler);
}

export { negativeIndex };
