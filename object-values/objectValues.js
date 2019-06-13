
function objectValues(object) {
  return Object.keys(object).map(key => object[key]);
}

export {
  objectValues,
};
