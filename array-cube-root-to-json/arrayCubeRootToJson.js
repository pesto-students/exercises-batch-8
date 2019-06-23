function validate(array) {
  if (!(array instanceof Array)) {
    throw new Error(`Expected Array got ${array}`);
  }
  for (const element of array) {
    if (typeof element !== 'string' && typeof element !== 'number') {
      throw new Error(`Expected numbers got ${element}`);
    }
    if (Number.isNaN(Number(element))) {
      throw new Error(`Expected numbers got ${element}`);
    }
  }
}

function arrayCubeRootToJson(array) {
  validate(array);
  return array.reduce(
    (acc, element) => ({
      ...acc,
      [String(element)]: Math.cbrt(Number(element)),
    }),
    {},
  );
}

export { arrayCubeRootToJson };
