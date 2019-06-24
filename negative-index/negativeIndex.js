function negativeIndex(array) {
  if (!(array instanceof Array)) {
    throw new TypeError('');
  }

  const handler = {
    get(target, index) {
      if (index < 0) {
        const properIndex = target.length + parseInt(index, 10);
        return Reflect.get(target, properIndex);
      }
      return Reflect.get(target, index);
    },
    set(target, index, value) {
      if (index < 0) {
        const properIndex = target.length + parseInt(index, 10);
        Reflect.set(target, properIndex, value);
      }
      Reflect.set(target, index, value);
    },
  };
  return new Proxy(array, handler);
}

export { negativeIndex };
