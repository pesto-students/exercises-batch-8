function square(number) {
  return number ** 2;
}

function rectangleDiagonal(length, breadth) {
  return Math.sqrt(square(length) + square(breadth));
}

export { rectangleDiagonal };
