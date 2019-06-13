
function isTriangle(...sides) {
  sides.sort((a, b) => a - b);
  const [smallSide, shortSide, longerSide] = sides;
  return longerSide < shortSide + smallSide;
}

export {
  isTriangle,
};
