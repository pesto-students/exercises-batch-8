
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  // Object.defineProperty(account, 'password', { value: 'initialPassword', writable: false });
  const immutableAccount = { ...Object.freeze(account) };
  immutableAccount.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
