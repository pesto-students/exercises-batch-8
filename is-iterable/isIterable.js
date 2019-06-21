
function isIterable(object) {
  try {
    object[Symbol.iterator]();
    return true;
  } catch (error) {
    return false;
  }
}

export {
  isIterable,
};
