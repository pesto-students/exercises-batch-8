
function timeout(name) {
  return new Promise(resolve => setTimeout(() => resolve(`Hello ${name}`), 300));
}

export {
  timeout,
};
