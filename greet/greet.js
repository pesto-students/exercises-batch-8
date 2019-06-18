function greet(args) {
  return new Promise((resolve) => {
    resolve(`Hey ${args}`);
  });
}

export { greet };
