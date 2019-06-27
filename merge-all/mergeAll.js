function mergeAll(objects) {
  return objects.reduce((acc, object) => {
    const accWithNewObject = { ...acc, ...object };
    return accWithNewObject;
  }, {});
}

export { mergeAll };
