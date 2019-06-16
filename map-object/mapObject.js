
function mapObject(object, action) {
  return Object.keys(object)
    .reduce((result, key) => {
      // eslint-disable-next-line no-param-reassign
      result[key] = action(object[key]);
      return result;
    }, {});
}

export {
  mapObject,
};
