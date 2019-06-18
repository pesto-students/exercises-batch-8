
function sequentialPromise(promises) {
  return promises.reduce((prevPromise, currPromise) => (
    prevPromise.then((result => currPromise(result)))
  ), Promise.resolve());
}

export {
  sequentialPromise,
};
