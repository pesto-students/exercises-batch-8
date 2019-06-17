
function constImmutable() {
  const account = {
    username: 'pesto',
    get password() {
      return 'initialPassword';
    },
    set password(value) {
      // password cannot be set again
    },
  };

  account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
