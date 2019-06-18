
function timeout(name) {
  return new Promise(() => setTimeout(() => `Hello ${name}`, 300));
}

export {
  timeout,
};
