function objectAssign(...args) {
  const returnObject = args.reduce((acc, currentObject) => ({ ...acc, ...currentObject }), {});

  for (const key of Object.keys(returnObject)) {
    // eslint-disable-next-line no-param-reassign
    args[0][key] = returnObject[key];
  }
  return returnObject;
}

export { objectAssign };
