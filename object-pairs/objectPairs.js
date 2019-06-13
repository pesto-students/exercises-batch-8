
function objectPairs(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc.push([key, obj[key]]);
    return acc;
  }, []);
}

export {
  objectPairs,
};
