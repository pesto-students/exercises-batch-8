
function steamrollArray(arr) {
  return arr.reduce((flattened, item) => {
    if (Array.isArray(item)) {
      return [...flattened, ...steamrollArray(item)];
    }
    return [...flattened, ...[item]];
  }, []);
}

export {
  steamrollArray,
};
