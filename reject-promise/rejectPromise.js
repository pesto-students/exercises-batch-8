// eslint-disable-next-line no-unused-vars
function rejectPromise() {
  return new Promise((resolve) => {
    resolve('REJECTED!');
  });
}

export { rejectPromise };
