function greatestCommmonDivisor(num1, num2) {
  if (num1 > num2) {
    return greatestCommmonDivisor(num2, num1);
  }
  if (num2 % num1 === 0) {
    return num1;
  }
  return greatestCommmonDivisor(num2 % num1, num1);
}
function leastCommonMultiple(num1, num2) {
  return (num1 * num2) / greatestCommmonDivisor(num1, num2);
}
function smallestCommons(limits) {
  const [lowerInd, upperInd] = limits[0] > limits[1] ? [1, 0] : [0, 1];
  if (limits[lowerInd] === limits[upperInd]) {
    return limits[lowerInd];
  }
  const middle = Math.floor((limits[lowerInd] + limits[upperInd]) / 2);
  return leastCommonMultiple(
    smallestCommons([limits[lowerInd], middle]),
    smallestCommons([middle + 1, limits[upperInd]]),
  );
}

export {
  smallestCommons,
};
