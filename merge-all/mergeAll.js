
function mergeAll(objects) {
  return objects.reduce((acc, obj) => Object.assign(acc, obj), {});
}

export {
  mergeAll,
};
