function timeout(args) {
  return new Promise(resolve => resolve(`Hello ${args}`));
}

export { timeout };
