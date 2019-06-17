
function bind(func, thisObj, ...prevArgs) {
  const bindedFunc = func.bind(thisObj);
  function calledWithArgs(...args) {
    return bindedFunc(...prevArgs, ...args);
  }
  return calledWithArgs;
}

export {
  bind,
};
