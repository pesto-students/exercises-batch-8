
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.defineProperty(account, 'password', { writable: false });
  return account.password;
}
export {
  constImmutable,
};
