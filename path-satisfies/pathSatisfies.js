function pathSatisfies(callback, path, object) {
  const pathValue = path.reduce((acc, el) => {
    if (!acc) {
      return object[el];
    }
    return acc[el];
  }, '');
  return Boolean(callback(pathValue));
}

export {
  pathSatisfies,
};
