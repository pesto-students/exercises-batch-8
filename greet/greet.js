
function greet(string) {
  const greetPromise = new Promise((resolve) => {
    resolve(`Hey ${string}`);
  });
  return greetPromise;
}

export {
  greet,
};
