
function arrayCubeRootToJson(cubes) {
  if (cubes.some(cube => typeof cube !== 'number' && typeof cube !== 'string')) {
    throw new Error('Invalid values');
  }
  if (cubes.some(cube => !Number(cube))) {
    throw new Error('Invalid values');
  }
  return cubes.reduce((acc, cube) => {
    acc[cube] = Math.cbrt(cube);
    return acc;
  }, {});
}

export {
  arrayCubeRootToJson,
};
