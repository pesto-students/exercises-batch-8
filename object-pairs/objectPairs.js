
function objectPairs(obj) {
  return Object.keys(obj).map(key => [key, obj[key]]);
}

export {
  objectPairs,
};
