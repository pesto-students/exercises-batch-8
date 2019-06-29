
function diffArray(first, second) {
  const uniquesOfFirst = first.filter(elem => !second.includes(elem));
  const uniquesOfSecond = second.filter(elem => !first.includes(elem));

  return [...uniquesOfFirst, ...uniquesOfSecond];
}

export {
  diffArray,
};
