function mergeAll(objects) {
  return objects.reduce((acc, object) => {
    const withNewObject = { ...acc, ...object };
    return withNewObject;
  }, {});
}

export { mergeAll };
