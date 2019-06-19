function objectAssign(...objInputs) {
  return objInputs.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

export { objectAssign };
