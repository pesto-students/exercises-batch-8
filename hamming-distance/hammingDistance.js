
function hammingDistance(string1, string2) {
  if (string1.length !== string2.length) {
    throw new Error('String of different Sizes');
  }
  return string1.split('').reduce((distance, value, index) => {
    // eslint-disable-next-line no-param-reassign
    distance += value !== string2.split('')[index];
    return distance;
  }, 0);
}

export {
  hammingDistance,
};
