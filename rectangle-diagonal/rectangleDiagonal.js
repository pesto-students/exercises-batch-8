
function rectangleDiagonal(length, breadth) {
  const sqareLength = length ** 2;
  const squarebreadth = breadth ** 2;
  return (sqareLength + squarebreadth) ** 0.5;
}

export {
  rectangleDiagonal,
};
