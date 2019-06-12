
function cacheFunction(fun) {
  const data = {};
  return (arg) => {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(arg)) return data[arg];
    data[arg] = fun(arg);
    return data[arg];
  };
}
export {
  cacheFunction,
};
