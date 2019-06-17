
function allPromises(args) {
  if (args === undefined) {
    return Promise.resolve(true);
  }
  return Promise.all(args);
}

export {
  allPromises,
};
