function isTriangle(...sides) {
  const sortedSides = sides.sort((a, b) => a - b);
  const smallestSide = sortedSides[0];
  const secondSmallestSide = sortedSides[1];
  const largestSide = sortedSides[2];
  if (largestSide < smallestSide + secondSmallestSide) {
    return true;
  }
  return false;
}

export { isTriangle };
