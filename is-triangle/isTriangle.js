
function isTriangle(...sides) {
  sides.sort((a, b) => b - a);
  const [biggerSide, shorterSide1, shorterSide2] = sides;
  return biggerSide < shorterSide1 + shorterSide2;
}

export {
  isTriangle,
};
