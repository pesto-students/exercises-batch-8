function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  const { password } = account;
  Object.defineProperty(account, 'password', {
    get() {
      return password;
    },
    set() {
      return password;
    },
  });
  account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
