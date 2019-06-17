
function joinArrays(...args) {
  return args.reduce((result, arr) => [...result, ...arr], []);
}

export {
  joinArrays,
};
