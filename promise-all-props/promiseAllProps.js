function promiseAllProps(object) {
  return Promise.all(Object.values(object)).then(object);
}

export { promiseAllProps };
