
function greet(...args) {
  return new Promise((resolve) => {
    resolve(`Hey ${args[0]}`);
  });
}

export {
  greet,
};
