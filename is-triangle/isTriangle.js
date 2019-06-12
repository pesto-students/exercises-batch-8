
function isTriangle(...args) {
  const sum = args.reduce((a, b) => a + b);
  for (let i = 0; i < args.length; i += 1) {
    if (sum - args[i] <= args[i]) return false;
  }
  return true;
}

export {
  isTriangle,
};
