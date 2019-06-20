
function hammingDistance(fromString, toString) {
  if (fromString.length !== toString.length) {
    throw new Error('Strings are not of same length');
  }

  let distance = 0;
  for (let i = 0; i < fromString.length; i += 1) {
    if (fromString[i] !== toString[i]) {
      distance += 1;
    }
  }

  return distance;
}

export {
  hammingDistance,
};
