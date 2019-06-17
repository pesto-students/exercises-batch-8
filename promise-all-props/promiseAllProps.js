
function promiseAllProps(props) {
  return new Promise((res, rej) => {
    Promise.all(props.values())
      .then(() => res(props))
      .catch(error => rej(error));
  });
}

export {
  promiseAllProps,
};
