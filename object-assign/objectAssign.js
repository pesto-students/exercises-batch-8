
function objectAssign(...objects) {
  return objects.reduce((acc, object) => (Object.assign(acc, object)));
}

export {
  objectAssign,
};
