/* eslint-disable no-param-reassign */

function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected array, recieved ${typeof array} (${array})`);
  }

  return new Proxy(array, {
    get(target, prop) {
      if (typeof prop === 'symbol') {
        return Reflect.get(target, prop);
      }
      let indexToLook = prop;
      if (indexToLook < 0) {
        indexToLook = array.length + parseInt(indexToLook, 10);
      }
      return Reflect.get(target, indexToLook);
    },
    set(target, prop, value) {
      let indexToLook = prop;
      if (indexToLook < 0) {
        indexToLook = array.length + parseInt(indexToLook, 10);
      }
      if (Number(prop) > array.length) {
        array.length = Number(prop) + 1;
      }
      return Reflect.set(target, indexToLook, value);
    },
  });
}

export {
  negativeIndex,
};
