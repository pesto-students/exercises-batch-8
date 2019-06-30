
function negativeIndex(array) {
  if (!Array.isArray(array)) {
    const error = new TypeError(`Expected array, received ${typeof array}(${array})`);
    throw error;
  }
  return new Proxy(array, {
    get(target, property) {
      if (typeof property === 'symbol') {
        return Reflect.get(target, property);
      }
      let arrayIndex = property;
      if (arrayIndex < 0) {
        arrayIndex = array.length + parseInt(arrayIndex, 10);
      }
      return Reflect.get(target, arrayIndex);
    },
    set(target, property, value) {
      let arrayIndex = property;
      if (arrayIndex < 0) {
        arrayIndex = array.length + parseInt(arrayIndex, 10);
      }
      if (+property > array.length) {
        array.length = +property + 1;
      }
      return Reflect.set(target, arrayIndex, value);
    }
  });
}

export {
  negativeIndex,
};