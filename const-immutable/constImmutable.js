
function constImmutable() {
  const account = {
    username: 'pesto',
  };
  Object.defineProperty(account, 'password', {
    value: 'initialPassword',
    writable: false,
    enumerable: false,
    configurable: false,
  });

  account.username = 'someOtherPassword';

  return account.password;
}

export {
  constImmutable,
};
