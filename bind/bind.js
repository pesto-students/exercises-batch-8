
function bind(func, thisObj, ...prevArgs) {
  const boundFunc = func.bind(thisObj);
  function calledWithArgs(...args) {
    return boundFunc(...prevArgs, ...args);
  }
  return calledWithArgs;
}

export {
  bind,
};
