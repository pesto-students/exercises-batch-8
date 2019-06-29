function objectAssign(...args) {
  const resultantObject = {};
  args.forEach(arg => {
    Object.assign(resultantObject, arg);
  });

  return resultantObject;
}

export { objectAssign };
