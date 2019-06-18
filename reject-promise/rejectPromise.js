
function rejectPromise() {
  const promise = new Promise((resolve) => {
    resolve('REJECTED!');
  });
  return promise;
}

export {
  rejectPromise,
};
