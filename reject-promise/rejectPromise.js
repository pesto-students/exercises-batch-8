
const rejectPromise = () => new Promise(resolve => resolve('REJECTED!'));

export {
  rejectPromise,
};
