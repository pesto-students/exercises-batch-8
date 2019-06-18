
function iterableProtocol() {
  return {
    next() {
      return { done: true };
    },
  };
}

export {
  iterableProtocol,
};
