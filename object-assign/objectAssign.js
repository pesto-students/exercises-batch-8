
function objectAssign(...objArray) {
  return objArray.reduce((acc, obj) => Object.assign(acc, obj));
}

export {
  objectAssign,
};
