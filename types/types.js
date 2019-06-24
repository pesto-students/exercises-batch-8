
function type(value) {
  if (value === null) {
    return 'Null';
  }
  if (value === undefined) {
    return 'Undefined';
  }
  if ('test' in Object.getPrototypeOf(value)) {
    return 'RegExp';
  }
  if (Array.isArray(value)) {
    return 'Array';
  }
  if (typeof value === 'number') {
    return 'Number';
  }
  if (typeof value === 'boolean') {
    return 'Boolean';
  }
  if (typeof value === 'string') {
    return 'String';
  }
  if (typeof value === 'function') {
    return 'Function';
  }
  if (typeof value === 'object') {
    return 'Object';
  }
  return null;
}

export {
  type,
};
