
function mergeAll(objs) {
  return objs.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

export {
  mergeAll,
};
