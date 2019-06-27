
function mergeAll(listOfObjects) {
  return listOfObjects.reduce((acc, object) => ({
    ...acc,
    ...object,
  }), {});
}

export {
  mergeAll,
};
