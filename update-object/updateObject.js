/* eslint-disable no-param-reassign */
function updateObject(index, value, obj) {
  const newObj = [...obj];
  if (index < 0) {
    index = newObj.length + index;
  }
  if (index < 0 || index >= obj.length) {
    return obj;
  }
  newObj[index] = value;
  return newObj;
}

function curry(fn, ...args) {
  if (fn.length === args.length) {
    // all needed arguments received?
    return fn(...args);
  }
  // return a fn that takes the remaining args and returns curried fn
  return (...rest) => curry(fn, ...args, ...rest);
}

const curried = curry(updateObject);

export { curried };
