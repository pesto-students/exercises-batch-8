
function isEven(...args) {
  const aNumber = args[0];
  return aNumber / 2 === Math.floor(aNumber / 2);
}


export {
  isEven,
};
