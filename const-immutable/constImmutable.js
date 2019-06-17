
function constImmutable() {
  const account = {
    username: 'pesto',
    get password() {
      return 'initialPassword';
    },
    set password(value) {
      console.log('Can\'t change password');
    },
  };
  account.password = 's3cret';
  return account.password;
}
export {
  constImmutable,
};
