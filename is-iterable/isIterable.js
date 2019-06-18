
function isIterable(arg) {
  if (typeof arg[Symbol.iterator] !== 'function') {
    return false;
  }
  if (typeof arg[Symbol.iterator]().next !== 'function') {
    return false;
  }
  if (arg[Symbol.iterator]().next().done === undefined) {
    return false;
  }
  if (arg[Symbol.iterator]().next().done === true) {
    return true;
  }
  if (arg[Symbol.iterator]().next().value === undefined) {
    return false;
  }
  return true;
}

export {
  isIterable,
};
