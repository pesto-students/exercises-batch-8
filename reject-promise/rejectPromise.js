
function rejectPromise() {
  return new Promise((res, rej) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    rej('REJECTED!');
  });
}

export {
  rejectPromise,
};
