
function greet(...args) {
  const promise = new Promise((resolve) => {
    resolve(`Hey ${args}`);
  });
  return promise;
}

export {
  greet,
};
