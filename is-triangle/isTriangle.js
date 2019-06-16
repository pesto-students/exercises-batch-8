
function isTriangle(...sides) {
  const [side, biggerSide, biggestSide] = sides.sort((a, b) => a - b);
  return side + biggerSide > biggestSide;
}

export {
  isTriangle,
};
