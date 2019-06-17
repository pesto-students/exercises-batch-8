
function rejectPromise() {
  return new Promise(reject => reject('REJECTED!'));
}

export {
  rejectPromise,
};
