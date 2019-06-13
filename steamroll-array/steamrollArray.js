function flatten(arr) {
  // eslint-disable-next-line arrow-body-style
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function steamrollArray(nestedArray) {
  return flatten(nestedArray);
}

export {
  steamrollArray,
};
