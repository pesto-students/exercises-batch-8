function square(num) {
  return num ** 2;
}

function rectangleDiagonal(length, breadth) {
  return Math.sqrt(square(length) + square(breadth));
}

export {
  rectangleDiagonal,
};
