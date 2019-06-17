
function constImmutable() {
  const account = {
    username: 'pesto',
  };
  Object.defineProperty(account, 'password', {
    value: 'initialPassword',
    writable: false,
    ennumerable: false,
    configurable: false,
  });

  return account.password;
}

export {
  constImmutable,
};
