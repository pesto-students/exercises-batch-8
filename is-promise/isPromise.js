
// WIP
function isPromise(...args) {
let prom = new Promise(() => {});
if(args[0] instanceof Promise) {
  return true
  } else {
    return (Promise.resolve(args[0]) === prom); 
  }
}



export {
  isPromise,
};
