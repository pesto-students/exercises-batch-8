
function timeout(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Hello ${data}`), 300);
  });
}
export {
  timeout,
};
