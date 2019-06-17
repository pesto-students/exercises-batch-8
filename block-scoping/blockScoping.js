/* eslint-disable no-var */


function blockScoping(n) {
  var callbacks = [];
  var i;
  for (i = 0; i <= 10; i += 1) {
    callbacks.push((function (j) {
      return () => j;
    })(i));
  }
  return callbacks[n]();
}

export {
  blockScoping,
};
