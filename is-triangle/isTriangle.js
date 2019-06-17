
function isTriangle(...sides) {
  const triangleConditions = sides.map((side) => {
    const otherSides = sides.filter(thisSide => thisSide !== side);
    const otherSideSum = otherSides.reduce((sidesTotal, otherSide) => sidesTotal + otherSide);

    return otherSideSum > side;
  });

  const itIsTriangle = triangleConditions.every(cond => cond === true);

  return itIsTriangle;
}

export {
  isTriangle,
};
