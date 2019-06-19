/* eslint-disable no-param-reassign */

function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected array, recieved ${typeof array} (${array})`);
  }

  return new Proxy(array, {
    get(target, prop) {
      try {
        let indexToLook = prop;
        if (indexToLook < 0) {
          indexToLook = array.length + parseInt(indexToLook, 10);
        }
        return Reflect.get(target, indexToLook);
      } catch (e) {
        return Reflect.get(target, prop);
      }
    },
    set(target, prop, value) {
      try {
        let indexToLook = prop;
        if (indexToLook < 0) {
          indexToLook = array.length + parseInt(indexToLook, 10);
        }
        if (Number(prop) > array.length) {
          array.length = Number(prop) + 1;
        }
        return Reflect.set(target, indexToLook, value);
      } catch (e) {
        return Reflect.set(target, prop, value);
      }
    },
  });
}

export {
  negativeIndex,
};
