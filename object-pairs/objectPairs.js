
function objectPairs(object) {
  return Object.keys(object).map(key => [key, object[key]]);
}

export {
  objectPairs,
};
