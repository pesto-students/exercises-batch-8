
function arrayCubeRootToJson(numberLikes) {
  if (!Array.isArray(numberLikes)) {
    throw new Error('Expecting array of numeric values.');
  }

  const areValuesNumeric = numberLikes.every(number => !Number.isNaN(parseFloat(number)));
  if (!areValuesNumeric) {
    throw new Error('Every element in an array should be of type number.');
  }

  const cubeRoots = numberLikes.map(number => ({
    number,
    cubeRoot: Math.cbrt(number),
  }));

  const roots = {};
  for (const root of cubeRoots) {
    roots[root.number] = root.cubeRoot;
  }
  return roots;
}

export {
  arrayCubeRootToJson,
};
