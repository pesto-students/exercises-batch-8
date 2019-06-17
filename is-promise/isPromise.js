
// WIP
function isPromise(...args) {
let prom = new Promise(() => {});
if(args[0] instanceof Promise) {
return true
}
return typeof args === prom;
}



export {
  isPromise,
};
