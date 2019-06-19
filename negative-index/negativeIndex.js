
function negativeIndex(maybeArray) {
  if (!(maybeArray instanceof Array)) {
    throw new TypeError('Only arrays are supported')
  }
  var handler = {
    get: (array, prop) => {
      const numberProp = Number(prop);
      if (numberProp < 0) {
        return array[array.length + numberProp];
      }
      return array[numberProp];
    },
    set: (array, prop, value) => {
      const numberProp = Number(prop);
      if (numberProp < 0) {
        array[array.length + numberProp] = numberProp;
      } else {
        array[numberProp] = value;
      }
      return true;
    },
  }
  const negativeIndexProxy = new Proxy(maybeArray, handler);
  return negativeIndexProxy;
}


export {
  negativeIndex,
};
