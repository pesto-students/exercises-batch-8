
function timeout(...args) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Hello ${args[0]}`), 250);
  });
}

export {
  timeout,
};
