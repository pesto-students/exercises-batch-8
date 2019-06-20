function setDefaultProperty(inputObj) {
  const variable = {
    get(target, trap) {
      return target.hasOwnProperty(trap) ? target[trap] : 'defaultValue';
    },
    set: function name(target, obj) {
      const objArray = Object.entries(obj);
      const key = objArray[0][0];
      const value = objArray[0][1];
      target.setAttribute(key, value);
      return target.value;
    },
  };
  const setDefaultProxy = new Proxy(inputObj, variable);
  return setDefaultProxy;
}

export { setDefaultProperty };
