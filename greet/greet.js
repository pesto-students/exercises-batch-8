
function greet(str) {
  return (name => new Promise(resolve => resolve(`Hey ${name}`)))(str);
}

export {
  greet,
};
