
function steamrollArray(array) {
  return array.reduce((acc, current) => {
    if (Array.isArray(current)) {
      return [...acc, ...steamrollArray(current)];
    }
    return [...acc, current];
  }, []);
}

export {
  steamrollArray,
};
