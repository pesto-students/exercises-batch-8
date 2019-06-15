
function rectangleDiagonal(length, breadth) {
  const lengthSquared = length ** 2;
  const breadthSquared = breadth ** 2;
  return Math.sqrt(lengthSquared + breadthSquared);
}

export {
  rectangleDiagonal,
};
