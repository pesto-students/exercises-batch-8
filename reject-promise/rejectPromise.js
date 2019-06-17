
function rejectPromise() {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.resolve('REJECTED!');
}

export {
  rejectPromise,
};
