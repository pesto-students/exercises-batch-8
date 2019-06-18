/* eslint-disable */
function constImmutable() {
  const account = {
    _username: 'pesto',
    _password: 'initialPassword',
    get username() {
      return this._username;
    },
    set username(value) {
      // dont save value
      return this._username;
    },
    get password() {
      return this._password;
    },
    set password(value) {
      // dont save value
      return this._password;
    },
  };
  account.password = 's3cret';
  return account.password;
}

export { constImmutable };
