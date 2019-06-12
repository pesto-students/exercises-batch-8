
function sumAll(bounds) {
  return (bounds[0] + bounds[1]) * (Math.abs(bounds[1] - bounds[0]) + 1) / 2;
}

export {
  sumAll,
};
