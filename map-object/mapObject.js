
function mapObject(object, cb) {
  return Object.keys(object).reduce((acc, key) => {
    acc[key] = cb(acc[key]);
    return acc;
  }, object);
}

export {
  mapObject,
};
