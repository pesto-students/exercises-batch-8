function flatteningFunction(arg, ...rest) {
  // if arg still has to be flattened
  if (Array.isArray(arg)) {
    if (rest.length > 0) {
      return [...flatteningFunction(...arg), ...flatteningFunction(...rest)];
    }
    return flatteningFunction(...arg);
  }
  // if arg is no longer an array
  return rest.length > 0 ? [arg, ...flatteningFunction(...rest)] : [arg];
}

function steamrollArray(arr) {
  const flattenedArr = flatteningFunction(arr.filter(el => (
    // is A non empty arr or non-array element
    (Array.isArray(el) && el.length > 0) || !Array.isArray(el)
  )));
  return flattenedArr;
}

export {
  steamrollArray,
};
