
function greet(name) {
  const promise = new Promise(resolve => resolve(`Hey ${name}`));
  return promise;
}

export {
  greet,
};
