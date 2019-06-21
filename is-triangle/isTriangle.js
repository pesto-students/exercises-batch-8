function isTriangle(side1, side2, side3) {
  // sum of two sides should be greater than third side
  // and this condition should be true for all pair of sides
  return (
    side1 + side2 > side3
    && side1 + side3 > side2
    && side2 + side3 > side1
  );
}

export {
  isTriangle,
};
