
function objectPairs(object) {
  return Object.keys(object).reduce((result = [], key) => {
    result.push([key, object[key]]);
    return result;
  }, []);
}

export {
  objectPairs,
};
