function getIndexToIns(array, value) {
  const sorted = array.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i] >= value) {
      return i;
    }
  }
  return sorted.length;
}

export {
  getIndexToIns,
};
