
function aperture(windowLength, array) {
  const tuples = [];
  for (let i = 0; i + windowLength <= array.length; i += 1) {
    const tuple = array.slice(i, i + windowLength);
    tuples.push(tuple);
  }
  return tuples;
}

export {
  aperture,
};
