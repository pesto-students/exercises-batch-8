
function splitEvery(interval, arr) {
  if (interval <= 0) {
    throw new Error('Interval needs to be positive');
  }
  return [...arr].reduce((acc, val, index) => {
    if (index % interval === 0) {
      acc.push(arr.slice(index, index + interval));
    }
    return acc;
  }, []);
}

export {
  splitEvery,
};
