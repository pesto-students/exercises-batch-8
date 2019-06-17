
// WIP
function isPromise(...args) {
  let prom = new Promise(() => {});
  return (Promise.resolve(args[0]) === prom); 
}

export {
  isPromise,
};
