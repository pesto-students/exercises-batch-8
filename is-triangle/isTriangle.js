
function isTriangle(...args) {
  const sorted = args.sort();
  return sorted[0] + sorted[1] > sorted[2];
}

export {
  isTriangle,
};
