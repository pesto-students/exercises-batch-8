
function steamrollArray(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(steamrollArray(val));
    }
    return acc.concat(val);
  }, []);
}

export {
  steamrollArray,
};
