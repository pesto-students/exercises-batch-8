/* eslint-disable no-param-reassign */

function mapObject(object, func) {
  // eslint-disable-next-line array-callback-return
  Object.keys(object).map((key) => {
    object[key] = func(object[key]);
  });
  return object;
}

export {
  mapObject,
};
