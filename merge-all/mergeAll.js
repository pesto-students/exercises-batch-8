function mergeAll(listOfObjects) {
  let mergedObject = {};
  for (const singleObject of listOfObjects) {
    mergedObject = { ...mergedObject, ...singleObject };
  }
  return mergedObject;
}
export { mergeAll };
