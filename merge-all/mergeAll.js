function mergeAll(array) {
  const mergedObject = {};
  array.map(element => {
    if (element.constructor === Object) {
      for (const key in element) {
        mergedObject[key] = element[key];
      }
    }
    return element;
  });
  return mergedObject;
}

export { mergeAll };
