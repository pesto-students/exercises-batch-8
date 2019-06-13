function rectangleDiagonal(...args) {
  const length = args[0];
  const width = args[1];
  const square = aNumber => aNumber ** 2;
  return (Math.sqrt(square(length) + square(width)));
}


export {
  rectangleDiagonal,
};
