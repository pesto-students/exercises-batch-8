const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const lcm = (a, b) => (a * b) / gcd(a, b);

function smallestCommons(range) {
  const [max, min] = range[0] > range[1] ? range : [range[1], range[0]];
  const rangeArr = [...Array(max - min + 1)].map((_, i) => i + min);
  const initialEl = rangeArr.shift();
  return rangeArr.reduce((acc, currentEl) => lcm(acc, currentEl), initialEl);
}

export { smallestCommons };
