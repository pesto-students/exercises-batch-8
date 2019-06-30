import { isNull, isUndefined } from 'util';

function types(element) {
  if (isNull(element)) {
    return 'Null';
  }
  if (isUndefined(element)) {
    return 'Undefined';
  }
  if (typeof element === 'string') {
    return 'String';
  }
  if (typeof element === 'function') {
    return 'Function';
  }
  if (typeof element === 'boolean') {
    return 'Boolean';
  }
  if (Array.isArray(element)) {
    return 'Array';
  }
  // regex
  if (element instanceof RegExp) {
    return 'RegExp';
  }
  if (typeof element === 'number') {
    return 'Number';
  }
  return 'Object';
}

export {
  types,
};
