
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  const desc = Object.getOwnPropertyDescriptor(account, 'password');
  Object.defineProperty(account, 'password', { ...desc, writable: false });
  try {
    account.password = 's3cret';
  } catch (error) {
    // do nothing
    console.log(error);
  }
  return account.password;
}

export {
  constImmutable,
};
