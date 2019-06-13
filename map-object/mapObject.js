
function mapObject(obj, fn) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}

export {
  mapObject,
};
