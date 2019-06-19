const get = (array, indexKey) => {
  const index = parseInt(indexKey, 10);
  if (index < 0) {
    return array[array.length + index];
  }
  return array[index];
};

const set = (array, indexKey, value) => {
  const index = parseInt(indexKey, 10);
  if (index < 0) {
    // eslint-disable-next-line no-param-reassign
    array[array.length + index] = value;
  }
  // eslint-disable-next-line no-param-reassign
  array[index] = value;
  return array;
};

function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }

  const handler = {
    get,
    set,
  };
  // TODO: make proxy behave like plain array too.
  return new Proxy(array, handler);
}

export {
  negativeIndex,
};
